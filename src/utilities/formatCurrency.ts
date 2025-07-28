const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}



//for undefined use for to display the default currency format based on the user's locale 
// Intl.NumberFormat represent API in JS  to format numbers according to the locale and options provided