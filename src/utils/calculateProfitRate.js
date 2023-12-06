export const calculateProfit = (buyPrice, profit) => {
  return (profit / buyPrice) * 100;
};

export const banOlim = (decimal, position) => {
  return decimal.toFixed(position);
};

export const calculateProfitRate = (buyPrice, profit) => {
  const BAN_OLIM_POSITION = 2;
  const profitAmount = calculateProfit(buyPrice, profit);
  console.log(profitAmount);
  const rate = banOlim(profitAmount, BAN_OLIM_POSITION);
  const format = new Intl.NumberFormat('ko-KR').format(rate);
  const result =
    format[format.length - BAN_OLIM_POSITION] !== '.'
      ? `${format}.0%`
      : `${format}%`;
  return result;
};
