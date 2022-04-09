import axios from 'axios';

const url = 'http://localhost:8000/feed';

export const fetchFeedData = () => axios.get(url);