const day = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

/**
 * Format French Date
 *
 * @param   {[Date]} date
 * @return  {[String]}      Formating date
 */
export const formatDate = (date) => {
  const jsDate = new Date(date);

  return `${day[jsDate.getDay() - 1]}. ${jsDate.getDate()} ${month[jsDate.getMonth()]} ${jsDate.getFullYear()}`;
};

/**
 * Format Travel Date
 *
 * @param   {[Date]} date
 * @return  {[String]}      Formating date
 */
export const travelFormatDate = (date) => {
  const jsDate = new Date(date);

  return `${jsDate.getDate()}/${jsDate.getMonth() + 1}/${jsDate.getFullYear()}`;
};
