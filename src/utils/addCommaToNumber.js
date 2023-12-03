const numberFormat = new Intl.NumberFormat('ko-KR');
const addCommaToNumber = (number) => numberFormat.format(number);

export default addCommaToNumber;
