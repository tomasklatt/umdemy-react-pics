import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ESPzNcgiJQP_xEyAZ6MBvYX64DyjFh4Q3Bof4VPzMFo`
    },
});