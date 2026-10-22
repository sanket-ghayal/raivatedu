// Formats a number as Indian rupees, e.g. 14999 -> "₹14,999"
export function formatPrice(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
