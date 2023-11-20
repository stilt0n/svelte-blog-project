type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

/**
 * Takes a date in the form YYYY-MM-DD and returns it formatted for locale
 * @param date
 * @param dateStyle
 * @param locales
 * @returns string
 */
export const formatDateString = (date: string, dateStyle: DateStyle = 'medium', locales = 'en') =>
	new Intl.DateTimeFormat(locales, { dateStyle }).format(new Date(date));
