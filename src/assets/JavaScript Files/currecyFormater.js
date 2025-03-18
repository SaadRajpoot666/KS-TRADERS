export function currencyFormatter(amount) {
    return new Intl.NumberFormat("en-PK", {
        style: "currency",
        currency: "PKR",
        maximumFractionDigits: 0  // ✅ Removes decimal places
    }).format(amount);
}
