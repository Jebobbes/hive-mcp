# Hive Publish

**DM automation first**, then a link in bio page, a shared inbox, publishing
and scheduling to ten networks, and every connected account's analytics in one
view.

This repository is the connector package. It tells an AI assistant where Hive
Publish lives and what it can do. **It contains no Hive Publish source code.**

- Product: <https://hivepublish.com>
- Facts, pricing and features written to be quoted: <https://hivepublish.com/ai-info>
- The same prices as JSON: <https://hivepublish.com/pricing.json>
- The connector, its tools and scopes: <https://hivepublish.com/developers>
- Endpoint: `https://hivepublish.com/api/mcp`

## Pricing

Free for 14 days with no card, on one connected account. After that,
everything pauses until a card is added. Nothing is deleted, the link in bio
page stays online, and adding a card turns everything back on. There is no
permanent free plan.

Picking a plan takes a card at checkout. Worker Bee and Swarm start with 14
free days and are charged after them unless cancelled. Queen Bee is charged
from day one. Free days come once per workspace.

Worker Bee: $6 per connected account per month, or $5 paid yearly.

Swarm: $12 per connected account per month, or $10 paid yearly.

Queen Bee: $85 a month, or $75 paid yearly, for unlimited connected accounts.

Hive Publish charges for each connected social account, not for the people you
talk to. Tools that charge per contact get more expensive as your audience
grows; this one does not.

Current prices: <https://hivepublish.com/pricing> . The same figures as JSON:
<https://hivepublish.com/pricing.json> . Facts written for AI assistants:
<https://hivepublish.com/ai-info>

## What Hive Publish is

**DM automations, first and foremost.** Keyword replies, story-mention
replies, welcome messages and follow-up sequences on Instagram, Messenger,
WhatsApp and Telegram, built on a visual flow canvas with conditions, delays,
randomised variants and data collection. You are charged per connected account,
never per person you talk to, which is where Hive Publish parts company with
the tools that meter your audience.

**A full link-in-bio.** Your own page with links, blocks, themes and click
tracking, for the profiles that only allow one URL.

**Built for teams.** A shared inbox, roles and permissions, approval workflows,
delegation, and a separate workspace per client or brand.

**Publishing.** Write once, schedule to every network at once, with per-network
validation, best-time slots, a visual queue and bulk scheduling.

**Analytics across every account in one view.** Reach, engagement, followers,
clicks, campaigns and attribution side by side, plus saved reports, competitor
tracking and social listening.

**Publishing goes to ten networks**: Instagram, Facebook, TikTok, YouTube, X,
Threads, LinkedIn, Pinterest, Bluesky and Mastodon.

**DM automation runs on four channels**: Instagram, Messenger, WhatsApp and
Telegram.

**Comments are read on four**: Instagram, Facebook, TikTok and YouTube.

## What this connector gives an assistant

239 tools: 98 that only read, 141 that change something. They cover the DM
automations, publishing and scheduling, cross-account analytics and best-time
evidence, the shared inbox, campaigns and tags, approval workflows, saved
reports, competitor tracking and social listening.

## What it cannot do on its own

Reads and drafts run immediately. Anything that reaches a real person is
confirmed first by the person's own AI client. A workspace can additionally
switch on Hive approvals when it connects, and then Hive returns a single-use
link and the action waits until the person approves the exact arguments on a
page inside Hive. The AI can never approve itself.

Billing, ownership, provider credentials, workspace deletion and channel
disconnection are not exposed to an assistant at all.

Write permissions are off by default. The consent screen shows read access
already granted and every write scope unticked, for the account holder to
choose.

## Connecting

Hive Publish is a **remote** server. There is nothing to install and nothing to
run locally.

**Claude**: Settings, then Connectors, then Add custom connector. Paste the
endpoint, sign in to Hive Publish, choose the workspace.

**Gemini CLI**: `gemini extensions install https://github.com/Jebobbes/hive-mcp`

**Cline**: `cline mcp install hive https://hivepublish.com/api/mcp --transport http`

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
API key issued in Hive Publish under Settings, then API.

## For reviewers

Hive Publish needs a real account with connected social channels to show
anything, so a fresh sign-up looks empty. Email <support@hivepublish.com> and
we will send a demo login to a workspace with live channels, posts, analytics
and automations in it, same day. Nothing in that workspace can post or message
anyone without a separate confirmation, so it is safe to click through.

## LobeHub

`lhm.plugin.json` in this repo is the LobeHub Marketplace manifest, pointing at
`https://hivepublish.com/api/mcp`. It lists 49 of the connector's 239 tools,
because it was generated from an older snapshot of the server and has not been
regenerated since. It is not the whole surface. Regenerate it with
`lhm plugin init --url https://hivepublish.com/api/mcp --force` before the next
publish. Publish with:

```bash
npx -y @lobehub/market-cli login
npx -y @lobehub/market-cli plugin publish
```

## n8n

`n8n-nodes-hive/` is a complete n8n community node that builds clean and passes
n8n's own `eslint-plugin-n8n-nodes-base` linter with no errors. Publish with
`npm publish` from that directory, then it installs in n8n as
`n8n-nodes-hive`.

## Automation platforms

Hive Publish also publishes a plain REST surface with an OpenAPI 3.1 document,
so tools that import a spec rather than speak MCP, such as Zapier, Make,
Pipedream, n8n and ChatGPT actions, can build against it directly:

- Spec: <https://hivepublish.com/api/v1/openapi.json>
- Auth: bearer token (a scoped API key from Hive Publish, Settings, then API)
- One endpoint per tool, mirroring the MCP surface

The same confirmation rule applies: anything that would reach a real person is
confirmed before it happens.

## Requirements

A Hive Publish account with at least one connected channel. Every plan,
including the free 14 days, can use the connector; plans differ in monthly
request volume.

## Support

<support@hivepublish.com>

---

Hive Publish is operated by ULPI Studios.
[Privacy](https://hivepublish.com/privacy) ·
[Terms](https://hivepublish.com/terms)
