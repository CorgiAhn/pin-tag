import nodemailer from 'nodemailer';
import { renderTargetEmail } from '@/email/TargetEmail';
import { renderEliminationEmail } from '@/email/EliminationEmail';
import Mail from 'nodemailer/lib/mailer';
import prisma from '../prisma';
import { ThrottledQueue } from '../util/ThrottledQueue';
import { User } from '@prisma/client';

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const mailQueue = new ThrottledQueue<Mail.Options>({
  handler: async (data) => {
    console.log('Emailing', data.to);
    await transport.sendMail(data).catch((err) => {
      console.error(`[EMAIL ERROR] Failed to email ${data.to}.\n${err.message}\nRetrying in 30 seconds...`);
      setTimeout(() => { mailQueue.push(data); }, 30000);
    });
  },
  timeout: 250,
});

export async function sendTargetEmail({ user, targetUser, gameId, isNew, isRevival }: {
  user: User; targetUser: User; gameId: string; isNew?: boolean; isRevival?: boolean;
}) {
  const authToken = await prisma.authToken.findUnique({ where: { userId: user.id } });
  const eliminationLink = `${process.env.BASE_URL}/api/auth/magic?t=${authToken?.token}&g=${gameId}&a=eliminate`;

  await transport.sendMail({
    from: 'lwhspintag2026@gmail.com',
    replyTo: 'lwhspintag2026@gmail.com',
    to: user.email,
    subject: !isRevival ? `YOUR ${isNew ? 'NEW ' : ''}PIN-TAG TARGET` : "YOU'VE BEEN REVIVED",
    html: renderTargetEmail({ name: user.firstName, target: targetUser, eliminationLink, isNew, isRevival }),
  });

}

export async function sendEliminationEmail({ user, assassinUser, gameId }: {
  user: User; assassinUser?: User; gameId: string;
}) {
  const authToken = await prisma.authToken.findUnique({ where: { userId: user.id } });
  const eliminationLink = `${process.env.BASE_URL}/api/auth/magic?t=${authToken?.token}&g=${gameId}`;

  await transport.sendMail({
    from: 'lwhspintag2026@gmail.com',
    replyTo: 'lwhspintag2026@gmail.com',
    to: user.email,
    subject: `YOU'VE BEEN ELIMINATED`,
    html: renderEliminationEmail({ name: user.firstName, assassin: assassinUser, eliminationLink }),
  });
}