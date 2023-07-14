export default async function getInviteLink(
  soundscapeId,
  inviterId,
) {
  return `https://soundscape3.vercel.app/invite?soundscapeId=${soundscapeId}&inviterId=${inviterId}`;
}
