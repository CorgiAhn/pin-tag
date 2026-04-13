export function renderEliminationEmail({
  name,
  assassin,
  eliminationLink,
}: {
  name: string;
  assassin?: { firstName: string; lastName: string; gradYear: number };
  eliminationLink: string;
}) {
  const shortYear = assassin?.gradYear.toString().substring(2);
  const assassinText = assassin
    ? `<strong style="color:#ef4444;">${assassin.firstName} ${assassin.lastName} '${shortYear}</strong>`
    : 'one of the event organizers';

  return `
    <div style="background:#07101e;padding:16px;font-family:monospace;color:white;">
      <h1 style="border:2px solid #16a34a;padding:4px 8px;display:inline-block;">PINTAG</h1>
      <div style="background:#321821;padding:16px;margin-top:16px;">
        <p>Hello <span style="color:#ef4444;">Agent ${name}</span>,</p>
        <p>You were eliminated from the game by ${assassinText}. Feel free to reply with any concerns.</p>
        ${assassin ? '<p>We may offer a revival round in the future! Check your email often.</p>' : ''}
        <p>Open your <a href="${eliminationLink}" style="color:#3b82f6;">mission portal</a> for more information.</p>
        <p>Better luck next time,<br/><span style="color:#ef4444;">Pin-Tag Organizers</span></p>
      </div>
    </div>
  `;
}