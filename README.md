# Demo Bot 🤖

An automated Slack bot that sends scheduled reminders for Demo Day sessions across multiple workspaces (CYF, ITD, ITP). The bot runs automatically via GitHub Actions and sends customized messages with demo details, meeting links, and festive holiday greetings during holiday periods.

## Features ✨

- **Multi-workspace support**: Sends messages to different Slack workspaces (CYF, ITD, ITP)
- **Automated scheduling**: Runs automatically on Mondays and Thursdays at 8:00 AM UTC via GitHub Actions
- **Dynamic messaging**: Generates randomized, engaging messages with workspace-specific emojis
- **Holiday detection**: Automatically sends holiday messages during the festive period
- **Flexible demo schedules**: Adjusts demo times based on the day of the week
- **Error handling & logging**: Comprehensive logging system in `src/logs/botLogger.mjs`

## Project Structure 📁

```
demo-bot/
├── .github/
│   └── workflows/
│       └── schedule.yml          # GitHub Actions workflow configuration
├── src/
│   ├── index.mjs                 # Main entry point
│   ├── config/
│   │   └── workspaces.mjs        # Workspace configurations
│   ├── data/
│   │   ├── emojis.mjs            # Emoji collections by workspace
│   │   ├── holidays.mjs          # Holiday-related data
│   │   └── messages.mjs          # Message templates
│   ├── logs/
│   │   └── botLogger.mjs         # Logging utility
│   ├── services/
│   │   ├── messageService.mjs    # Message generation logic
│   │   └── slackClient.mjs       # Slack API client wrapper
│   └── utils/
│       └── utils.mjs             # Utility functions
├── .env.example                  # Environment variables template
├── .gitignore
└── package.json
```

## Installation 🚀

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Slack workspace(s) with bot tokens
- GitHub repository (for automated scheduling)

### Local Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/i786m/demo-bot.git
   cd demo-bot
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Configure environment variables**:
   
   Copy `.env.example` to `.env`:
   ```sh
   cp .env.example .env
   ```

   Update `.env` with your actual Slack credentials:
   ```env
   SLACK_BOT_WORKSPACE1_TOKEN=xoxb-your-workspace1-bot-token
   SLACK_WORKSPACE1_CHANNEL_ID=C01XXXXXXXXX
   
   SLACK_BOT_WORKSPACE2_TOKEN=xoxb-your-workspace2-bot-token
   SLACK_WORKSPACE2_CHANNEL_ID=C02XXXXXXXXX
   
   SLACK_BOT_WORKSPACE3_TOKEN=xoxb-your-workspace3-bot-token
   SLACK_WORKSPACE3_CHANNEL_ID=C03XXXXXXXXX
   
   SLACK_BOT_WORKSPACE4_TOKEN=xoxb-your-workspace4-bot-token
   SLACK_WORKSPACE4_CHANNEL_ID=C04XXXXXXXXX
   
   MEET_LINK=https://meet.google.com/xxx-xxxx-xxx
   ```

4. **Run the bot locally**:
   ```sh
   npm start
   ```

## GitHub Actions Setup ⚙️

The bot uses `.github/workflows/schedule.yml` to run automatically.

### Adding Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions, and add your workspace-specific secrets:

- `SLACK_BOT_<WORKSPACE>_TOKEN`
- `SLACK_<WORKSPACE>_CHANNEL_ID`
- `MEET_LINK`

Replace `<WORKSPACE>` with your actual workspace names (e.g., DEV, ITD, ITP, CYF).

### Schedule

The bot runs automatically:
- **Mondays** at 8:00 AM UTC
- **Thursdays** at 8:00 AM UTC

You can also trigger it manually from the Actions tab.

## How It Works 🔧

1. **Main Entry** (`src/index.mjs`): Orchestrates the bot execution
2. **Workspace Config** (`src/config/workspaces.mjs`): Manages multiple Slack workspaces
3. **Message Generation** (`src/services/messageService.mjs`): Creates dynamic messages using:
   - `formatDate` for human-readable dates
   - `isHolidayPeriod` to detect holiday periods
   - `getRandomHeaderMessage` and `getRandomCtaMessage` for varied content
4. **Slack Integration** (`src/services/slackClient.mjs`): Sends messages via Slack API
5. **Logging** (`src/logs/botLogger.mjs`): Records all bot activities

## Customization 🎨

### Adding New Workspaces

Edit `src/config/workspaces.mjs`:

```javascript
export function getWorkspaces() {
  return {
    // ...existing workspaces
    NEW_WORKSPACE: {
      name: 'NEW_WORKSPACE',
      token: process.env.SLACK_BOT_NEW_TOKEN,
      channelId: process.env.SLACK_NEW_CHANNEL_ID,
    },
  };
}
```

### Customizing Messages

- **Header messages**: Edit `headerMessages` array in `src/data/messages.mjs`
- **CTA messages**: Edit `ctaMessages` array in `src/data/messages.mjs`
- **Emojis**: Modify emoji arrays in `src/data/emojis.mjs`

### Adjusting Holiday Period

The holiday period logic is in `isHolidayPeriod` function in `src/utils/utils.mjs`. Currently configured to start after the last Monday/Thursday before Christmas Eve and end on January 2nd.

## Troubleshooting 🐛

### Bot not sending messages

1. Check the logs in `src/logs/bot.log`
2. Verify Slack tokens have `chat:write` permissions
3. Ensure channel IDs are correct
4. Check GitHub Actions logs for errors

### Local testing

Run the bot manually to debug:
```sh
npm start
```

Check console output and `src/logs/bot.log` for error messages.

## License 📄

MIT

## Author 👨‍💻

Imran Mohamed

---

**Need help?** Check the logs at `src/logs/bot.log` or review the error handling in `src/services/slackClient.mjs`.