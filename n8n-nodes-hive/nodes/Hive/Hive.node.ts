import type { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { NodeConnectionTypes } from 'n8n-workflow';

/**
 * Declarative node. Every operation is one POST to Hive's REST surface, which
 * mirrors the MCP tools one-for-one (https://hivepublish.com/api/v1/openapi.json).
 *
 * Read and draft operations complete immediately. Scheduling returns a
 * single-use approval URL instead of acting — the account holder confirms it
 * inside Hive. That is the product behaving correctly, not an error, so the
 * node surfaces the response as-is.
 */
export class Hive implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Hive',
		name: 'hive',
		icon: 'file:hive.svg',
		group: ['output'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Publish, schedule, analyse and automate DMs across twelve social networks',
		defaults: { name: 'Hive' },
		inputs: ['main'],
		outputs: ['main'],
		credentials: [{ name: 'hiveApi', required: true }],
		requestDefaults: {
			baseURL: 'https://hivepublish.com',
			headers: { 'Content-Type': 'application/json' },
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				default: 'readChannels',
				options: [
					{
						name: 'Create Draft',
						value: 'createDraft',
						action: 'Create a post draft',
						description: 'Create an editable draft. This never publishes.',
						routing: {
							request: {
								method: 'POST',
								url: '/api/v1/tools/create_draft',
								body: {
									caption: '={{$parameter["caption"]}}',
									channelIds: '={{$parameter["channelIds"].split(",").map((s) => s.trim()).filter(Boolean)}}',
									title: '={{$parameter["title"] || undefined}}',
									idempotencyKey: '={{$parameter["idempotencyKey"]}}',
								},
							},
						},
					},
					{
						name: 'Read Analytics Summary',
						value: 'readAnalyticsSummary',
						action: 'Read analytics summary',
						description: 'Latest metrics for every connected account',
						routing: { request: { method: 'POST', url: '/api/v1/tools/read_analytics_summary', body: {} } },
					},
					{
						name: 'Read Calendar',
						value: 'readCalendar',
						action: 'Read the publishing calendar',
						description: 'Scheduled, draft, approval, failed and recently published items',
						routing: { request: { method: 'POST', url: '/api/v1/tools/read_calendar', body: {} } },
					},
					{
						name: 'Read Channels',
						value: 'readChannels',
						action: 'Read connected channels',
						description: 'List connected accounts and their connection health',
						routing: { request: { method: 'POST', url: '/api/v1/tools/read_channels', body: {} } },
					},
					{
						name: 'Read Posts',
						value: 'readPosts',
						action: 'Read posts',
						description: 'Published post history across connected accounts',
						routing: { request: { method: 'POST', url: '/api/v1/tools/read_posts', body: {} } },
					},
					{
						name: 'Schedule Post',
						value: 'schedulePost',
						action: 'Schedule a post',
						description: 'Returns an approval link for the account holder to confirm in Hive; it does not publish on its own',
						routing: {
							request: {
								method: 'POST',
								url: '/api/v1/tools/schedule_post',
								body: {
									postId: '={{$parameter["postId"]}}',
									channelIds: '={{$parameter["channelIds"].split(",").map((s) => s.trim()).filter(Boolean)}}',
									runAt: '={{$parameter["runAt"]}}',
									idempotencyKey: '={{$parameter["idempotencyKey"]}}',
								},
							},
						},
					},
					{
						name: 'Search',
						value: 'search',
						action: 'Search hive',
						description: 'Search posts, ideas and campaigns by keyword',
						routing: {
							request: {
								method: 'POST',
								url: '/api/v1/tools/search',
								body: { query: '={{$parameter["query"]}}' },
							},
						},
					},
				],
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				required: true,
				description: 'What to look for across posts, ideas and campaigns',
				displayOptions: { show: { operation: ['search'] } },
			},
			{
				displayName: 'Caption',
				name: 'caption',
				type: 'string',
				typeOptions: { rows: 4 },
				default: '',
				required: true,
				description: 'The post text',
				displayOptions: { show: { operation: ['createDraft'] } },
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Internal title for the draft',
				displayOptions: { show: { operation: ['createDraft'] } },
			},
			{
				displayName: 'Post ID',
				name: 'postId',
				type: 'string',
				default: '',
				required: true,
				description: 'The draft to schedule. Use Create Draft first, or Search to find one.',
				displayOptions: { show: { operation: ['schedulePost'] } },
			},
			{
				displayName: 'Run At',
				name: 'runAt',
				type: 'dateTime',
				default: '',
				required: true,
				description: 'When to publish, in the workspace timezone',
				displayOptions: { show: { operation: ['schedulePost'] } },
			},
			{
				displayName: 'Channel IDs',
				name: 'channelIds',
				type: 'string',
				default: '',
				required: true,
				placeholder: 'c5620979-...,cdef1266-...',
				description: 'Comma-separated channel IDs. Run Read Channels to list them.',
				displayOptions: { show: { operation: ['createDraft', 'schedulePost'] } },
			},
			{
				displayName: 'Idempotency Key',
				name: 'idempotencyKey',
				type: 'string',
				default: '={{$workflow.id}}-{{$execution.id}}-{{$itemIndex}}',
				required: true,
				description: 'Reuse only when retrying this exact write. Hive uses it to avoid duplicates.',
				displayOptions: { show: { operation: ['createDraft', 'schedulePost'] } },
			},
		],
	};
}
