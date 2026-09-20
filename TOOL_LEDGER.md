# Hive MCP connector — 47-tool execution ledger

Run 2026-09-20 against production `https://hivepublish.com/api/mcp` as an
authorised OAuth connector, on a workspace with 19 live channels (Instagram,
Facebook, Threads, TikTok, WhatsApp, YouTube).

"challenge" = called with no `approvalToken`. That is the tool's designed first
half: it writes a pending approval, returns the approval URL and the exact
arguments, and reaches no audience. Nothing was approved, so nothing executed.

| # | Tool | How | Result |
|---|---|---|---|
| 1 | add_competitor | executed | created MrBeast (youtube) |
| 2 | cancel_job | executed | job cancelled |
| 3 | cancel_scheduled_post | challenge | approval returned |
| 4 | create_campaign | executed | created |
| 5 | create_draft | executed | created |
| 6 | create_idea | executed | FAILED first (null content_format) → fixed → passes |
| 7 | create_podcast_show | executed | draft show created |
| 8 | create_report | executed | created |
| 9 | create_saved_reply | executed | created |
| 10 | create_simple_automation | executed | draft, with go-live blockers listed |
| 11 | create_tag | executed | created |
| 12 | list_automation_recipes | executed | 6 recipes + 41 canvas templates |
| 13 | list_connected_accounts | executed | 19 accounts, per-trigger readiness |
| 14 | pause_automation | challenge | approval returned |
| 15 | pause_automation_flow | challenge | approval returned |
| 16 | queue_competitor_refresh | executed | job queued |
| 17 | read_advocacy | executed | empty, correct |
| 18 | read_analytics_summary | executed | was 417 KB → capped → normal |
| 19 | read_approval_workflows | executed | empty, correct |
| 20 | read_automation_flow | executed | trigger + steps in plain words |
| 21 | read_automation_results | executed | explains why it never fired |
| 22 | read_automations | executed | empty, correct |
| 23 | read_best_times | executed | slots, with source disclosed |
| 24 | read_calendar | executed | ok |
| 25 | read_campaigns_and_tags | executed | ok |
| 26 | read_channels | executed | 19 channels |
| 27 | read_competitors | executed | ok |
| 28 | read_content_page | executed | paginates ideas |
| 29 | read_inbox_summary | executed | aggregate counts only |
| 30 | read_inbox_threads | executed | refused: owner opt-in off (correct) |
| 31 | read_job_page | executed | ok |
| 32 | read_jobs | executed | ok |
| 33 | read_listening | executed | ok |
| 34 | read_podcasts | executed | ok |
| 35 | read_portfolio | executed | 4 workspaces |
| 36 | read_posts | executed | real posts |
| 37 | read_product_knowledge | executed | ok |
| 38 | read_report_schedules | executed | ok |
| 39 | read_reports | executed | ok |
| 40 | read_reviews | executed | ok |
| 41 | reply_to_comment | challenge | approval returned |
| 42 | reschedule_post | challenge | approval returned |
| 43 | schedule_post | challenge | approval returned |
| 44 | send_direct_message | NOT RUN | blocked by the operator's own safety layer |
| 45 | set_automation_live | challenge | approval returned |
| 46 | update_draft | executed | updated |
| 47 | update_simple_automation | executed | updated, stayed draft |

## The one not run

`send_direct_message` is the only tool never invoked. It shares one code path
with the seven tools above that were exercised through it
(`enforceConfirmation`, lib/assistant/toolRegistry.ts), which returns the
approval challenge before any handler runs. Its gate is therefore the same gate,
proven seven times — but it was not itself called, and this ledger does not
claim otherwise.

## Fixed during the run

- `create_idea` crashed on a NOT NULL column when `contentFormat` was omitted.
- `read_analytics_summary` returned 417 KB unbounded; now one snapshot per
  channel, 25 posts by default (max 100), no media URLs.
- Every tool gained `annotations.title`; the directory scanner went from 49
  suggestions to 2.
- Empty `read_channels` / `list_connected_accounts` now explain why they are
  empty instead of returning a bare `[]`.
