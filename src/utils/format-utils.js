const toCurrencyFormat = (value) => {
  return value.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}) + ' GCR'
}

export { toCurrencyFormat }
