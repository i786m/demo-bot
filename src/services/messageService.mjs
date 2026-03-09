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
    const demoSchedule = `${dayOfWeek === 1 ? `6:00 PM to 6:50 PM` : `11:00 AM to 11:50 AM`} (Timezone: London)`;
    const tomorrowFormatted = formatDate(tomorrow);
    const demoTime = `:calendar: *When?* ${tomorrowFormatted} from ${demoSchedule}`;
    const meetLink = `:link: *Where?* ${process.env.MEET_LINK}`;
    const messageHeader = getRandomHeaderMessage(workspace);
    const messageCta = getRandomCtaMessage(workspace);
    const presenterMessage =
		'_:index_pointing_at_the_viewer:Want to give a demo? Please reply to this thread:thread:_';
     const demoLengths =
			workspace === 'ITD' || workspace === 'ITP' ?
				'5 - 10 minutes max': workspace === 'CYF' ?
					'PISCINE - 2 minutes & SDC/LAUNCH - 5 minutes' : 
          'ITP/ITD: 5 - 10 minutes max, PISCINE: 2 minutes & SDC/LAUNCH: 5 minutes';
		const demoLengthMessage = 
    `:stopwatch: *Demo length: * ${demoLengths}`;
    const fullMessage = `${messageHeader}\n\n${demoTime}\n${meetLink}\n\n${presenterMessage}\n\n${demoLengthMessage}\n\n${messageCta}`;
    return isHolidayPeriod() ? getHolidayMessage() : fullMessage;
}
