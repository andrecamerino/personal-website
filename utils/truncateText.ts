export const truncateText = (text: string, charLimit: number): string => {
  if (!text) return "";
  if (charLimit <= 0) return "";

  return text.length > charLimit
    ? text.slice(0, charLimit).trimEnd() + "..."
    : text;
};