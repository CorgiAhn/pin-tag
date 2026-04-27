import { userAuth } from '@/lib/auth/hooks';
import { sendTargetEmail } from '@/lib/game/email';
import { Role } from '@prisma/client';
import prisma from '@/lib/prisma';

export async function POST(
  request: Request,
  { params }: { params: { gameId: string } }
) {
  const auth = await userAuth();
  if (!auth || auth.role !== Role.ADMIN)
    return Response.json({ error: 'Unauthorized' }, { status: 403 });

  const { gameId } = params;
  const { userId } = await request.json();

  const participant = await prisma.participant.findFirst({
    where: { gameId, userId },
    include: { user: true, target: { include: { user: true } } },
  });

  if (!participant) return Response.json({ error: 'Participant not found' }, { status: 404 });
  if (!participant.target) return Response.json({ error: 'No target assigned' }, { status: 400 });

  await sendTargetEmail({
    user: participant.user,
    targetUser: participant.target.user,
    gameId,
    isNew: false,
  });

  return Response.json({ success: true, emailed: participant.user.email });
}