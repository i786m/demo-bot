import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), './src/logs/bot.log');

/**
 * Logs a message to the bot.log file with a timestamp.
 * @param {string} message - The message to log
 */
export function botLogger(message) {
	const logMessage = `${new Date().toUTCString()}\n${message}\n\n`;
	fs.appendFileSync(logFilePath, logMessage);
}
