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
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const dayOfWeek = days[date.getDay()];
	const dayOfMonth = getOrdinalNumber(date.getDate());
	const month = months[date.getMonth()];
	const year = date.getFullYear();
	return `${dayOfWeek} ${dayOfMonth} of ${month} ${year}`;
}