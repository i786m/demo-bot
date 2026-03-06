import { WebClient } from '@slack/web-api';
import { botLogger } from '../logs/botLogger.mjs';

/**
 * Create a new Slack client instance
 * @param {string} token - Slack bot token
 * @returns {object} Slack client instance
 */
export function createSlackClient(token) {
	return new WebClient(token);
}

/**
 * Sends a message to a Slack channel
 * @param {object} client - Slack client instance
 * @param {string} channel - Slack channel ID
 * @param {string} message - Message text
 * Errors are handled gracefully: if the API call fails, the error is logged.
 */
export async function sendMessage(client, workspace, channelId, message) {
	try {
		await client.chat.postMessage({
			channel: channelId,
			text: message,
		});
		return true;
	} catch (error) {
		botLogger(
			`ERROR: Failed to send message to ${workspace} workspace.\n${error.message}`,
		);
		return false;
	}
}
