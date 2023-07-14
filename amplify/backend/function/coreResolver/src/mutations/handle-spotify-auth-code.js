"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
async function handleSpotifyAuthCode(ctx) {
    const { code, redirectUri } = ctx.arguments
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
        const spotifyResponse = (await axios_1.default.get('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })).data;
        const userResponse = (await ddbClient
            .query({
            TableName: `User-${appsyncApiId}-${env}`,
            IndexName: 'BySpotifyId',
            KeyConditionExpression: '#spotifyId = :spotifyId',
            ExpressionAttributeNames: {
                '#spotifyId': 'spotifyId',
            },
            ExpressionAttributeValues: {
                ':spotifyId': spotifyResponse.id,
            },
        })
            .promise()).Items;
        if (!userResponse) {
            throw new Error('User query response was null');
        }
        let user = null;
        const now = new Date().toISOString();
        if (userResponse.length === 0) {
            user = {
                owner: (0, uuid_1.v4)(),
                spotifyId: spotifyResponse.id,
                displayName: spotifyResponse.display_name,
                profPicUrl: spotifyResponse.images[0].url,
                spotifyAccessToken: accessToken,
                spotifyRefreshToken: refreshToken,
                createdAt: now,
                updatedAt: now,
            };
            await ddbClient
                .put({
                TableName: `User-${appsyncApiId}-${env}`,
                Item: user,
            })
                .promise();
        }
        else {
            user = userResponse[0];
            await ddbClient
                .update({
                TableName: `User-${appsyncApiId}-${env}`,
                Key: { owner: user.owner },
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
            user = Object.assign(Object.assign({}, user), { spotifyAccessToken: accessToken, spotifyRefreshToken: refreshToken });
        }
        delete user.spotifyRefreshToken;
        return { accessToken: response.data.access_token, user };
    }
    catch (err) {
        console.error('Failed to exchange access tokens', err);
    }
}
exports.default = handleSpotifyAuthCode;
