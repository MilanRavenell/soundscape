"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function refreshSpotifyAccessToken(ctx) {
    const { owner } = ctx.arguments.input;
    const { ddbClient } = ctx.resources;
    const { SPOTIFY_CLIENT_ID: spotifyClientId, SPOTIFY_CLIENT_SECRET: spotifyClientSecret, APPSYNC_API_ID: appsyncApiId, ENV: env, } = ctx.resources.envVars;
    try {
        const user = (await ddbClient
            .get({
            TableName: `User-${appsyncApiId}-${env}`,
            Key: { owner },
        })
            .promise()).Item;
        if (!user) {
            throw new Error('user was null');
        }
        const response = await axios_1.default.post('https://accounts.spotify.com/api/token', {
            grant_type: 'refresh_token',
            refresh_token: user.spotifyRefreshToken,
        }, {
            headers: {
                Authorization: 'Basic ' +
                    Buffer.from(spotifyClientId + ':' + spotifyClientSecret).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const { access_token: accessToken } = response.data;
        await ddbClient
            .update({
            TableName: `User-${appsyncApiId}-${env}`,
            Key: { owner },
            UpdateExpression: 'SET #spotifyAccessToken = :spotifyAccessToken',
            ExpressionAttributeNames: {
                '#spotifyAccessToken': 'accessToken',
            },
            ExpressionAttributeValues: {
                ':spotifyAccessToken': accessToken,
            },
        })
            .promise();
        return { accessToken };
    }
    catch (err) {
        console.error('Failed to exchange access tokens', err);
        return { accessToken: null };
    }
}
exports.default = refreshSpotifyAccessToken;
