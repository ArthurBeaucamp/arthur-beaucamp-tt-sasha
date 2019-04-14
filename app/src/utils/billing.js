/**
 * Format for total billing
 *
 * @param   {[Number]} amount
 * @param   {[String]} currency
 * @return  {[String]}
 */
// eslint-disable-next-line import/prefer-default-export
export const billingFormat = (amount, currency) => {
  const totalAmount = new Intl.NumberFormat().format(amount);
  let totalCurrency = currency;

  switch (currency) {
    case 'EUR':
      totalCurrency = '€';
      break;

    case 'USD':
      totalCurrency = '$';
      break;

    default:
      break;
  }

  return `${totalAmount} ${totalCurrency}`;
};
