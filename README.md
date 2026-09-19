# Hive

Hive is a social media management platform: one place to publish across twelve
networks, see how every account is performing, work a shared inbox with your
team, and run the DM automations that turn an audience into customers.

This repository is the connector package. It tells an AI assistant where Hive
lives and what it can do. **It contains no Hive source code** — only the
connection details and documentation below.

- Product: <https://hivepublish.com>
- Developer documentation: <https://hivepublish.com/developers>
- Endpoint: `https://hivepublish.com/api/mcp`

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

## What the assistant can do

47 tools across publishing, scheduling, cross-account analytics, the inbox,
contacts, the link-in-bio page, and DM automations for Instagram, Messenger,
WhatsApp and TikTok.

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

## Requirements

A Hive account with at least one connected channel. Every plan, including the
trial, can use the connector; plans differ in monthly request volume.

## Support

<support@hivepublish.com>

---

Hive is operated by ULPI Studios.
[Privacy](https://hivepublish.com/privacy) ·
[Terms](https://hivepublish.com/terms)
