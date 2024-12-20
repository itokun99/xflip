export function formatCurrency(value: number, prefix: string = "Rp."): string {
  if (isNaN(value)) {
    // throw new Error("Input must be a valid number.");
    return "";
  }

  // Convert the number to a string with thousand separators
  const formatted = value
    .toFixed(0) // Ensure no decimals
    .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add thousand separators

  return `${prefix} ${formatted}`;
}
