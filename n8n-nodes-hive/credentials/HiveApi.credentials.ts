import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class HiveApi implements ICredentialType {
	name = 'hiveApi';

	displayName = 'Hive Publish API';

	/* eslint-disable-next-line n8n-nodes-base/cred-class-field-documentation-url-miscased --
	   that rule expects a docs slug and camelCases anything it is given; this field
	   holds a full URL, which the sibling rule (…-not-http-url) requires. */
	documentationUrl = 'https://hivepublish.com/developers';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Create one in Hive Publish under Settings, then API. Scopes on the key decide which tools this node may call.',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://hivepublish.com',
			url: '/api/v1/tools/read_channels',
			method: 'POST',
			body: {},
		},
	};
}
