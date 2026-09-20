# n8n-nodes-hive

An [n8n](https://n8n.io) community node for [Hive](https://hivepublish.com) —
publish, schedule, analyse and automate DMs across twelve social networks.

## Install

n8n → **Settings → Community nodes → Install** → `n8n-nodes-hive`

## Credentials

One field: a Hive API key. Create it in Hive under **Settings → API**. The
scopes on the key decide which operations the node may call. The credential's
Test button calls `read_channels`, so a wrong key fails immediately rather than
mid-workflow.

## Operations

| Operation | Runs |
|---|---|
| Read Channels | immediately |
| Read Posts | immediately |
| Read Calendar | immediately |
| Read Analytics Summary | immediately |
| Search | immediately |
| Create Draft | immediately — never publishes |
| Schedule Post | **returns an approval link** |

## The approval link

Scheduling does not publish. It returns a single-use approval URL that the
account holder confirms inside Hive, and the call is re-sent with the token it
gives back. That is Hive working correctly, not a failure — so the node passes
the response straight through rather than raising. Route it to a Slack or email
step so someone can act on it.

Reads and draft creation have no such gate.

## Building on more than this

Hive exposes 49 tools. This node surfaces the seven that make sense in a
workflow; the rest are reachable with an HTTP Request node against
<https://hivepublish.com/api/v1/openapi.json> using the same bearer key, or
through the MCP server at `https://hivepublish.com/api/mcp`.

## Support

<support@hivepublish.com> · <https://hivepublish.com/developers>

## Licence

MIT
