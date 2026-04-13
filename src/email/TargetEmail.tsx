export function renderTargetEmail({
  name,
  target,
  eliminationLink,
  isNew,
  isRevival,
}: {
  name: string;
  target: { firstName: string; lastName: string; gradYear: number };
  eliminationLink: string;
  isNew?: boolean;
  isRevival?: boolean;
}) {
  const currentYear = new Date().getFullYear();
  const grades = ['Senior', 'Junior', 'Sophomore', 'Frosh'];
  const grade = grades[currentYear - target.gradYear] ?? 'Unknown';
  const shortYear = target.gradYear.toString().substring(2);

  return `
    <div style="background:#07101e;padding:16px;font-family:monospace;color:white;">
      <h1 style="border:2px solid #16a34a;padding:4px 8px;display:inline-block;">PINTAG</h1>
      <div style="background:#0D2E28;padding:16px;margin-top:16px;">
        <p>Hello <span style="color:#22c55e;">Agent ${name}</span>,</p>
        <p>${isRevival ? 'You have been revived! Your NEW' : isNew ? 'Your target has been updated. Your NEW' : 'Your'} target is <strong style="color:#22c55e;">${target.firstName} ${target.lastName} '${shortYear}</strong>.</p>
        <p>Open your <a href="${eliminationLink}" style="color:#3b82f6;">mission portal</a> to mark them as eliminated and receive your next target. Check your email often!</p>
        <p>Best of luck,<br/><span style="color:#22c55e;">Pin-Tag Organizers</span></p>
      </div>
      <div style="background:#321821;padding:16px;margin-top:16px;">
        <h3 style="color:#dc2626;">YOUR ${isNew ? 'NEW ' : ''}TARGET</h3>
        <p><strong>Name:</strong> ${target.firstName} ${target.lastName}<br/>
        <strong>Grade:</strong> ${grade}</p>
        <a href="${eliminationLink}" style="display:inline-block;padding:8px 12px;border:2px solid #ef4444;color:white;text-decoration:none;margin-top:8px;">Open Mission Portal</a>
      </div>
    </div>
  `;
}