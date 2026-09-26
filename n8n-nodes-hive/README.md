# n8n-nodes-hive

An [n8n](https://n8n.io) community node for
[Hive Publish](https://hivepublish.com): automate DMs on Instagram, Messenger,
WhatsApp and Telegram, then publish, schedule and analyse across ten networks
(Instagram, Facebook, TikTok, YouTube, X, Threads, LinkedIn, Pinterest, Bluesky
and Mastodon).

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

## Install

n8n, then **Settings, Community nodes, Install**, then `n8n-nodes-hive`

## Credentials

One field: a Hive Publish API key. Create it in Hive Publish under
**Settings, then API**. The scopes on the key decide which operations the node
may call. The credential's Test button calls `read_channels`, so a wrong key
fails immediately rather than mid-workflow.

## Operations

| Operation | Runs |
|---|---|
| Read Channels | immediately |
| Read Posts | immediately |
| Read Calendar | immediately |
| Read Analytics Summary | immediately |
| Search | immediately |
| Create Draft | immediately, never publishes |
| Schedule Post | confirmed before it happens |

## Confirmation before anything reaches a real person

Reads and drafts run immediately. Anything that reaches a real person is
confirmed first. A workspace can switch on Hive approvals when it connects, and
then scheduling returns a single-use link and waits until the account holder
approves the exact arguments on a page inside Hive; the call is re-sent with the
token that gives back. That is Hive Publish working correctly, not a failure, so
the node passes the response straight through rather than raising. Route it to a
Slack or email step so someone can act on it.

## Building on more than this

Hive Publish exposes 239 tools: 98 that only read, 141 that change something.
This node surfaces the seven that make sense in a workflow; the rest are
reachable with an HTTP Request node against
<https://hivepublish.com/api/v1/openapi.json> using the same bearer key, or
through the MCP server at `https://hivepublish.com/api/mcp`.

## Support

<support@hivepublish.com> · <https://hivepublish.com/developers>

## Licence

MIT
