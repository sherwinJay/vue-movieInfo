export function useSliceTextByDot(paragraph: string) {
  // Split by the dot, keeping track of segments
  const parts = paragraph.split(".");

  if (parts.length < 10) {
    // Less than 4 dots, return the whole paragraph as is
    return { before: paragraph, after: "" };
  }

  // Get the first 4 segments and join them back with dots
  const before = parts.slice(0, 2).join(".") + ".";
  // Get the rest and join back
  const after = parts.slice(2, 5).join(".") + ".";

  return { before, after };
}
