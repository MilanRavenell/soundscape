import { IContext } from '../types';
import axios from 'axios';

interface RefreshSpotifyAccessTokenArguments {
    owner: string;
}

async function refreshSpotifyAccessToken(ctx: IContext) {
    const { owner } = ctx.arguments.input as RefreshSpotifyAccessTokenArguments;
    const { ddbClient } = ctx.resources;
    const {
        SPOTIFY_CLIENT_ID: spotifyClientId,
        SPOTIFY_CLIENT_SECRET: spotifyClientSecret,
        APPSYNC_API_ID: appsyncApiId,
        ENV: env,
    } = ctx.resources.envVars;

    try {
        const user = (
            await ddbClient
                .get({
                    TableName: `User-${appsyncApiId}-${env}`,
                    Key: { owner },
                })
                .promise()
        ).Item;

        if (!user) {
            throw new Error('user was null');
        }

        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            {
                grant_type: 'refresh_token',
                refresh_token: user.spotifyRefreshToken,
            },
            {
                headers: {
                    Authorization:
                        'Basic ' +
                        Buffer.from(
                            spotifyClientId + ':' + spotifyClientSecret,
                        ).toString('base64'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );

        const { access_token: accessToken } = response.data;

        await ddbClient
            .update({
                TableName: `User-${appsyncApiId}-${env}`,
                Key: { owner },
                UpdateExpression:
                    'SET #spotifyAccessToken = :spotifyAccessToken',
                ExpressionAttributeNames: {
                    '#spotifyAccessToken': 'accessToken',
                },
                ExpressionAttributeValues: {
                    ':spotifyAccessToken': accessToken,
                },
            })
            .promise();

        return { accessToken };
    } catch (err) {
        console.error('Failed to exchange access tokens', err);
        return { accessToken: null };
    }
}

export default refreshSpotifyAccessToken;
