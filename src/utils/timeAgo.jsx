export function timeAgo(orderDate) {
  const now = new Date();
  const createdAt = new Date(orderDate);
  const diffMs = now - createdAt; // différence en millisecondes

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  const months  = Math.floor(days / 30);
  const years   = Math.floor(days / 365);

  if (seconds < 60) return `il y a ${seconds} sec`;
  if (minutes < 60) return `il y a ${minutes} min`;
  if (hours < 24)   return `il y a ${hours} h`;
  if (days < 30)    return `il y a ${days} j`;
  if (months < 12)  return `il y a ${months} mois`;
  return `il y a ${years} an${years > 1 ? "s" : ""}`;
}

