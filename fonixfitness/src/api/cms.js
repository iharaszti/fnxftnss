import * as contentful from "contentful"

const baseURL = "https://cdn.contentful.com";

console.log(process.env);

export const api = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});