import axios from 'axios';

export default axios.create({
    baseURL:'https://newsapi.org/v2',
    headers:{
        Authorization:'Bearer fadbe6eafd154620ad0d17519a81e195'
    }
});