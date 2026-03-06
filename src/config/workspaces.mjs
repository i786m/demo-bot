export function getWorkspaces() {
	return {
		i786m: {
			name: 'i786m',
			token: process.env.SLACK_BOT_DEV_TOKEN,
			channelId: process.env.SLACK_DEV_CHANNEL_ID,
		},
		ITD: {
			name: 'ITD',
			token: process.env.SLACK_BOT_ITD_TOKEN,
			channelId: process.env.SLACK_ITD_CHANNEL_ID,
		},
		ITP: {
			name: 'ITP',
			token: process.env.SLACK_BOT_ITP_TOKEN,
			channelId: process.env.SLACK_ITP_CHANNEL_ID,
		},
		CYF: {
			name: 'CYF',
			token: process.env.SLACK_BOT_CYF_TOKEN,
			channelId: process.env.SLACK_CYF_CHANNEL_ID,
		},
	};
}
