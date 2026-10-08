<p><img src="logo.png" width="96" height="96" alt="Hive bee"></p>

# Hive Publish

Official Hive Publish plugin, maintained by Yoav through the `Jebobbes` GitHub account. This package contains connector configuration and agent guidance. Hive's application source and credentials are not included.

- Product: https://hivepublish.com
- Documentation and support: https://hivepublish.com/developers
- Privacy: https://hivepublish.com/privacy
- Terms: https://hivepublish.com/terms
- Publisher contact: yoav@hivepublish.com
- Support: support@hivepublish.com
- MCP endpoint: https://hivepublish.com/api/mcp

## Connect from Claude

Install the Hive Publish plugin or add its separately listed MCP connector. Enable Hive's MCP server, sign in to Hive and select your workspace. Review and approve the requesting client's permissions. Both use the same hosted endpoint. The plugin adds the guidance in `skills/hive/SKILL.md`; the connector exposes the permitted live tools.

For Claude Code, `.claude-plugin/plugin.json` declares `./.mcp.json` and `./skills/`. The remote MCP configuration uses HTTP and contains no authorization header, credential, local command or startup script. Hive's protected OAuth connection handles sign-in. Existing connections need reconnection only when the person chooses to grant newly requested permissions. Refresh tool discovery after reconnection or a permission change. An empty workspace cannot supply historical social-account metrics.

## Current capabilities

Start with `read_product_knowledge` and the live connection's tool list. Discover additional controls with `list_workspace_operations` and use only the operations and arguments it returns. Access depends on the connection's scopes, workspace role, plan, account access and each operation's readiness checks. No fixed tool count or plugin version proves every Hive screen, provider account or database prerequisite is ready.

Available controls include content planning and publishing, Honeycomb automations, Hive Bio, analytics and supported Inbox and workspace operations. Media upload may require the client's file-transfer support or Hive's native uploader. Provider sign-in, credentials, card entry, passwords and security challenges stay in protected browser steps. Missing provider data stays missing; fixtures must not be presented as real activity.

Writes are marked for confirmation in the AI client. Hive adds exact-action approval when the connection's policy requires it, and administration always requires separate Hive approval. The AI cannot approve itself. Private text stays masked by default. A workspace owner or admin must enable both external-AI access and private-body sharing in Inbox privacy settings. Explicit requests for original Inbox text use only the permitted native reveal controls, with the connection's scopes, role checks, confirmation and access audit. Permitted private exports can also contain original information and follow their own scope, access, consent and audit requirements. Do not repeat an action to recover a large result or after an uncertain delivery warning.

For current pricing, trial terms and plan-specific capabilities, read Hive's product information tools or https://hivepublish.com/ai-info. This plugin does not embed a price or network count that can become stale.

## Branding and updates

This plugin is version 1.1.2 and retains the `hive-publish` identity and existing `Jebobbes/hive-mcp` source. The packaged icon is `./logo.png`, containing the official Hive bee. The remote MCP server separately declares its icon at https://hivepublish.com/connector-icon-512.png. Anthropic's directory keeps its own reviewed listing metadata and uploaded-image state. The package does not claim it can override an expired uploaded image or approve pending directory edits.

The hosted MCP server, plugin package and directory listing have independent versions and approval histories. Deploying Hive does not publish a new plugin package, approve directory metadata, update every installed copy or expand a saved OAuth grant. Anthropic follows the existing submission's tracked branch or tag and scans new commits. A GitHub push webhook can accelerate that scan, but scheduled checks also exist. No build or polling job is needed in this package.

## Reviewer access

See `REVIEW.md`. Dedicated reviewer credentials must use the marketplace's secure review channel. They are never included in a public repository. Reviewer access is ready only after a real login, workspace selection, OAuth completion, permitted tool discovery and a permitted read succeed. A passing local package check is not proof of reviewer access or directory approval.

`TOOL_LEDGER.md`, when present in the source repository, is a historical September test record. It does not establish today's tool count, first-attempt connection behavior or full provider coverage.

## License

MIT. The Hive bee identifies Hive Publish and is not permission to present another product as Hive.
