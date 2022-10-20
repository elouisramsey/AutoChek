export const convertCurrency = (amount: number) => {
  return amount
    ?.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

