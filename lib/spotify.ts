import {AccessToken, Track} from "spotify-types";
import * as querystring from "querystring";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

export const getAccessToken = async (): Promise<AccessToken> => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: {
            Authorization: `Basic ${BASIC}`,
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: querystring.stringify({
            grant_type: "refresh_token",
            refresh_token,
        }),
    });

    return response.json();
};

interface TopTracks {
    items: Track[]
}

export const getTopTracks = async (limit = 10): Promise<TopTracks> => {
    const { access_token } = await getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/me/top/tracks?limit=${limit}`, {
        method: "GET",
        headers: new Headers({
            Authorization: `Bearer ${access_token}`,
        }),
    });

    return response.json();
}

interface CurrentlyPlayingTrack {
    item: Track | null
}

export const getCurrentlyPlayingTrack = async (): Promise<CurrentlyPlayingTrack> => {
    const { access_token } = await getAccessToken();
    const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    if (response.status === 204 || response.status > 400) {
        return {item: null};
    }

    return response.json();
};
