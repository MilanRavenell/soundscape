interface IContextResources {
    ddbClient: AWS.DynamoDB.DocumentClient;
    envVars: NodeJS.ProcessEnv;
}

export interface IContextArguments {
    input: Object;
}

export interface IContext {
    resources: IContextResources;
    arguments: IContextArguments;
}
