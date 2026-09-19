# Hive

**A colony of workers for your social media.** One connected workspace for
social growth — not a cheaper version of a single tool.

This repository is the connector package. It tells an AI assistant where Hive
lives and what it can do. **It contains no Hive source code.**

- Product: <https://hivepublish.com>
- Developer documentation: <https://hivepublish.com/developers>
- Endpoint: `https://hivepublish.com/api/mcp`

## What Hive is

**DM automations, first and foremost.** Comment-to-DM, keyword replies,
story-mention replies, welcome messages and follow-up sequences across
Instagram, Messenger, WhatsApp and TikTok — built on a visual flow canvas with
conditions, delays, randomised variants and data collection. **Contacts are
unlimited.** You are never charged per person you talk to, which is where Hive
undercuts the tools that meter your audience.

**A full link-in-bio.** Your own page — links, blocks, themes, click tracking —
for the profiles that only allow one URL.

**Built for teams.** A shared inbox, roles and permissions, approval workflows,
delegation, and a separate workspace per client or brand.

**Publishing.** Write once, schedule to every network at once, with per-network
validation, best-time slots, a visual queue and bulk scheduling.

**Analytics across every account in one view.** Reach, engagement, followers,
clicks, campaigns and attribution side by side, plus saved reports, competitor
tracking and social listening.

Twelve networks: Instagram, Facebook, Messenger, WhatsApp, TikTok, YouTube,
LinkedIn, Threads, Pinterest, Snapchat, Bluesky, Mastodon and Telegram.

## What this connector gives an assistant

47 tools over the DM automations, publishing and scheduling, cross-account
analytics and best-time evidence, the shared inbox, campaigns and tags,
approval workflows, saved reports, competitor tracking and social listening.

## What it cannot do on its own

Reads and drafting run immediately. Anything that reaches a real audience does
not: scheduling, rescheduling or cancelling a post, replying publicly to a
comment, sending a direct message, and setting an automation live all return an
approval link that the account holder confirms inside Hive. There is no
immediate-publish tool. Billing, ownership, provider credentials, workspace
deletion and channel disconnection are not exposed to an assistant at all.

Write permissions are off by default. The consent screen shows read access
already granted and every write scope unticked, for the account holder to
choose.

## Connecting

Hive is a **remote** server. There is nothing to install and nothing to run
locally.

**Claude** — Settings → Connectors → Add custom connector, paste the endpoint,
sign in to Hive, choose the workspace.

**Clients that expect a local command** (and anything else that reads `.mcp.json`):

```json
{
  "mcpServers": {
    "hive": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://hivepublish.com/api/mcp"]
    }
  }
}
```

Sign-in is OAuth 2.1 with PKCE and dynamic client registration, or a scoped
API key issued in Hive under Settings → API.

## Requirements

A Hive account with at least one connected channel. Every plan, including the
trial, can use the connector; plans differ in monthly request volume.

## Support

<support@hivepublish.com>

---

Hive is operated by ULPI Studios.
[Privacy](https://hivepublish.com/privacy) ·
[Terms](https://hivepublish.com/terms)
