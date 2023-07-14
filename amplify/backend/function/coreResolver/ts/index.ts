import AWS from 'aws-sdk';
import { IContext, IContextArguments } from './types';
import queries from './queries';
import mutations from './mutations';

interface IDictionary<T> {
    [id: string]: T;
}

type FunctionDict = IDictionary<(ctx: IContext) => Promise<Object | void>>;

interface Params {
    typeName: string;
    fieldName: string;
    arguments: IContextArguments;
}

interface TriggerEvent extends Params {
    LOCAL_ENVVARS: Object;
    key3: string;
}

const ddbClient: AWS.DynamoDB.DocumentClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-west-2',
    apiVersion: 'latest',
});

const functions: IDictionary<FunctionDict> = {
    Query: queries,
    Mutation: mutations,
};

export const handler: Object = async (event: TriggerEvent) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    let objToParse: Params = event;

    const { typeName, fieldName, arguments: args } = objToParse;

    const response = await functions[typeName][fieldName]({
        resources: {
            ddbClient,
            envVars: process.env,
        },
        arguments: args,
    });

    return response;
};
