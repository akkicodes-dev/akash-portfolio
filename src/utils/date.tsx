export function formatedDateMonthYear(currentDate: string) {
  if (!currentDate || currentDate === "Present") return "Present";

  const parts = currentDate.split("/").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return "Present";

  const [day, month, year] = parts;
  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) return "Present";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatedDate(currentDate: string) {
  if (!currentDate || currentDate === "Present") return "Present";

  const parts = currentDate.split("/").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return "Present";

  const [day, month, year] = parts;
  const date = new Date(year, month - 1, day);
  if (isNaN(date.getTime())) return "Present";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function getCompactDuration(startStr: string, endStr: string): string {
  const startParts = startStr.split("/").map(Number);
  const endParts = endStr === "Present" || !endStr ? null : endStr.split("/").map(Number);

  if (startParts.length !== 3 || startParts.some((n) => Number.isNaN(n))) return "";

  const [, startMonth, startYear] = startParts;

  let endMonth: number;
  let endYear: number;

  if (!endParts || endParts.length !== 3 || endParts.some((n) => Number.isNaN(n))) {
    const now = new Date();
    endMonth = now.getMonth() + 1;
    endYear = now.getFullYear();
  } else {
    [, endMonth, endYear] = endParts;
  }

  const totalStartMonths = startYear * 12 + (startMonth - 1);
  const totalEndMonths = endYear * 12 + (endMonth - 1);
  const diff = totalEndMonths - totalStartMonths;

  const years = Math.floor(diff / 12);
  const months = diff % 12;

  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";

  return [yearStr, monthStr].filter(Boolean).join(", ");
}
