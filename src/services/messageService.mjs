import { formatDate, isHolidayPeriod } from '../utils/utils.mjs';
import { getRandomHeaderMessage, getRandomCtaMessage, getHolidayMessage } from '../data/messages.mjs';

/**
 * Generates Message to be sent as a reminder depending on the day of the week. If its within the holiday period, it adds a holiday message otherwise it sends the regular message.
 * @param {string} workspace - The name of the workspace to generate the message for
 * @returns {string} - The generated message string
 * @example
 * generateMessage('CYF'); // Returns a formatted reminder or holiday message for CYF workspace
 */
export function generateMessage(workspace) {
	const today = new Date();
    const dayOfWeek = today.getDay();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const demoSchedule =
		dayOfWeek === 1 ? `6:00 PM to 6:50 PM` : `11:00 AM to 11:50 AM`;
    const tomorrowFormatted = formatDate(tomorrow);
    const demoTime = `:calendar: *When?* ${tomorrowFormatted} from ${demoSchedule}`;
    const meetLink = `:link: *Where?* ${process.env.MEET_LINK}`;
    const messageHeader = getRandomHeaderMessage(workspace);
    const messageCta = getRandomCtaMessage(workspace);
    const presenterMessage =
		'_Please reply to this thread:thread: if you want to give a demo._';
    const fullMessage = `${messageHeader}\n\n${demoTime}\n${meetLink}\n\n${messageCta}\n\n${presenterMessage}`;
    return isHolidayPeriod() ? getHolidayMessage() : fullMessage;
}
