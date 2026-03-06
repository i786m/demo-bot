import dotenv from 'dotenv';
dotenv.config();

import { createSlackClient, sendMessage } from './services/slackClient.mjs';
import { botLogger } from './logs/botLogger.mjs';
import { getWorkspaces } from './config/workspaces.mjs';

async function main() {
	try {
		const workspaces = getWorkspaces();
		for (const workspace in workspaces) {
			const { name, token, channelId } = workspaces[workspace];
			const client = createSlackClient(token);
			const message = `Hello from the bot! This is a test message!`;
			const sent = await sendMessage(client, name, channelId, message);
			if (sent) {
				botLogger(`SUCCESS: Message sent to ${name} workspace successfully`);
                console.log(`Message sent to ${name}`);
			}
        }
	} catch (error) {
		botLogger(`Error in main function: ${error.message}`);
	}
}

main();
