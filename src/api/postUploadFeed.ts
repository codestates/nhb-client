import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const api = process.env.REACT_APP_SERVER_ADDRESS || 'https://localhost:5000';
const accessToken = process.env.AccessToken || 'hello';

const apiClient = axios.create({
  baseURL: api,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'withCredentials': true,
    'authorization': `Bearer ${accessToken}`,
  },
});
export interface Content {
  content: string[];
  word: string;
}

export interface UploadFeed {
  message: string;
}

export async function postUploadFeedT(content: Content) {
  const response = await apiClient.post<UploadFeed>('/feed', content);
  return response.data;
}
