/**
 * Gets random element from provided array
 * @param {Array} array - An array of elements
 * @returns {*} - A random element from the array
 * @example
 * getRandomElementFrom(['a', 'b', 'c']); // 'a', 'b', or 'c'
 */
export function getRandomElementFrom(array) {
	return array[Math.floor(Math.random() * array.length)];
}

/**
 * Returns a number with its ordinal suffix (e.g., 1st, 2nd, 3rd, etc.)
 * @param {number} number - The number for which to get the ordinal suffix
 * @returns {string} - The ordinal suffix for the number
 * @example
 * getOrdinalNumber(1); // '1st'
 * getOrdinalNumber(12); // '12th'
 */
export function getOrdinalNumber(number) {
	const lastDigit = number % 10;
	const lastTwoDigits = number % 100;
	if (lastDigit === 1 && lastTwoDigits !== 11) {
		return number + 'st';
	}
	if (lastDigit === 2 && lastTwoDigits !== 12) {
		return number + 'nd';
	}
	if (lastDigit === 3 && lastTwoDigits !== 13) {
		return number + 'rd';
	}
	return number + 'th';
}

/**
 * Formats a date as a human-readable string (e.g., "Monday 15th of May 2024")
 * @param {Date} date - The date to format
 * @returns {string} - The formatted date string
 */
export function formatDate(date) {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const dayOfWeek = days[date.getDay()];
	const dayOfMonth = getOrdinalNumber(date.getDate());
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `${dayOfWeek} ${dayOfMonth} of ${month} ${year}`;
}

/**
 * Checks if the given date falls within the holiday period.
 * The holiday period starts the day after the later of the last Monday or Thursday before Christmas Eve (Dec 24), and ends on January 2nd of the following year. Christmas Eve is always included in the holiday period.
 * @param {Date} [today] - The date to check (defaults to current date)
 * @returns {boolean} - True if the date is within the holiday period, false otherwise
 * @example
 * isHolidayPeriod(new Date('2026-12-24')); // true (Christmas Eve is a holiday)
 * isHolidayPeriod(new Date('2026-12-21')); // false (last working day)
 * isHolidayPeriod(new Date('2026-12-25')); // true
 * isHolidayPeriod(new Date('2027-01-03')); // false
 */
export function isHolidayPeriod(today = new Date()) {
	const year = today.getFullYear();
	const christmasEve = new Date(year, 11, 24);
	const newYear = new Date(year + 1, 0, 2);
	const lastMondayBeforeChristmasEve = new Date(christmasEve);
	lastMondayBeforeChristmasEve.setDate(
		christmasEve.getDate() - ((christmasEve.getDay() + 6) % 7),
	);
	const lastThursdayBeforeChristmasEve = new Date(christmasEve);
	lastThursdayBeforeChristmasEve.setDate(
		christmasEve.getDate() - ((christmasEve.getDay() + 3) % 7),
	);
	const lastDemoDay =
		lastMondayBeforeChristmasEve > lastThursdayBeforeChristmasEve ?
			lastMondayBeforeChristmasEve
		:	lastThursdayBeforeChristmasEve;
	const holidayStart = new Date(lastDemoDay);
	holidayStart.setDate(lastDemoDay.getDate() + 1);
	return today >= holidayStart && today <= newYear;
}
