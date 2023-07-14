"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
async function exchangeSpotifyTokens(ctx) {
    const { code, redirectUri, owner } = ctx.arguments
        .input;
    const { ddbClient } = ctx.resources;
    const { SPOTIFY_CLIENT_ID: spotifyClientId, SPOTIFY_CLIENT_SECRET: spotifyClientSecret, APPSYNC_API_ID: appsyncApiId, ENV: env, } = ctx.resources.envVars;
    try {
        const response = await axios_1.default.post('https://accounts.spotify.com/api/token', {
            grant_type: 'authorization_code',
            code,
            redirect_uri: redirectUri,
        }, {
            headers: {
                Authorization: 'Basic ' +
                    Buffer.from(spotifyClientId + ':' + spotifyClientSecret).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const { access_token: accessToken, refresh_token: refreshToken } = response.data;
        await ddbClient
            .update({
            TableName: `User-${appsyncApiId}-${env}`,
            Key: { owner },
            UpdateExpression: 'SET #spotifyRefreshToken = :spotifyRefreshToken, #spotifyAccessToken = :spotifyAccessToken',
            ExpressionAttributeNames: {
                '#spotifyRefreshToken': 'spotifyRefreshToken',
                '#spotifyAccessToken': 'accessToken',
            },
            ExpressionAttributeValues: {
                ':spotifyRefreshToken': refreshToken,
                ':spotifyAccessToken': accessToken,
            },
        })
            .promise();
        return { accessToken: response.data.access_token };
    }
    catch (err) {
        console.error('Failed to exchange access tokens', err);
    }
}
exports.default = exchangeSpotifyTokens;
