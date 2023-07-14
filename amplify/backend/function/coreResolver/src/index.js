"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const queries_1 = __importDefault(require("./queries"));
const mutations_1 = __importDefault(require("./mutations"));
const ddbClient = new aws_sdk_1.default.DynamoDB.DocumentClient({
    region: 'us-west-2',
    apiVersion: 'latest',
});
const functions = {
    Query: queries_1.default,
    Mutation: mutations_1.default,
};
const handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    let objToParse = event;
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
exports.handler = handler;
