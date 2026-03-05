import { WebClient } from "@slack/web-api";
import { botLogger } from "../utils/logger.mjs";

/**
 * Create a new Slack client instance
 * @param {string} token - Slack bot token
 * @returns {object} Slack client instance
 */
export function createSlackClient(token) {
    const client = new WebClient(token);
    return client;
}

/**
 * Sends a message to a Slack channel
 * @param {object} client - Slack client instance   
 * @param {string} channel - Slack channel ID
 * @param {string} message - Message text
 * Errors are handled gracefully: if the API call fails, the error is logged.
 */
export async function sendMessage(client, channelId, message) {
    try {
        await client.chat.postMessage({
            channel: channelId,
            text: message,
        });
        botLogger(`Message sent to channel ${channelId}`);
    } catch (error) {
        botLogger(`Error sending message to channel ${channelId}: ${error.message}`);
    }
}

