import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'bot.log');

/**
 * Logs a message to the bot.log file with a timestamp.
 * @param {string} message - The message to log
 */
export function botLogger(message) {
	const logMessage = `${new Date().toISOString()} - ${message}\n`;
	fs.appendFileSync(logFilePath, logMessage);
}
