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

**Gemini CLI** — `gemini extensions install https://github.com/Jebobbes/hive-mcp`

**Cline** — `cline mcp install hive https://hivepublish.com/api/mcp --transport http`

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

## For reviewers

Hive needs a real account with connected social channels to show anything, so a
fresh sign-up looks empty. Email <support@hivepublish.com> and we will send a
demo login to a workspace with live channels, posts, analytics and automations
in it, same day. Nothing in that workspace can post or message anyone without a
separate confirmation inside Hive, so it is safe to click through.

## LobeHub

`lhm.plugin.json` in this repo is the LobeHub Marketplace manifest, generated
from the live server: 49 tools with their real schemas, pointing at
`https://hivepublish.com/api/mcp`. Publish with:

```bash
npx -y @lobehub/market-cli login
npx -y @lobehub/market-cli plugin publish
```

## n8n

`n8n-nodes-hive/` is a complete n8n community node — builds clean and passes
n8n's own `eslint-plugin-n8n-nodes-base` linter with no errors. Publish with
`npm publish` from that directory, then it installs in n8n as
`n8n-nodes-hive`.

## Automation platforms

Hive also publishes a plain REST surface with an OpenAPI 3.1 document, so tools
that import a spec rather than speak MCP — Zapier, Make, Pipedream, n8n,
ChatGPT actions — can build against it directly:

- Spec: <https://hivepublish.com/api/v1/openapi.json>
- Auth: bearer token (a scoped API key from Hive, Settings → API)
- 48 endpoints, one per tool, mirroring the MCP surface exactly

The same approval rule applies: anything that would reach an audience returns an
approval link instead of acting.

## Requirements

A Hive account with at least one connected channel. Every plan, including the
trial, can use the connector; plans differ in monthly request volume.

## Support

<support@hivepublish.com>

---

Hive is operated by ULPI Studios.
[Privacy](https://hivepublish.com/privacy) ·
[Terms](https://hivepublish.com/terms)
