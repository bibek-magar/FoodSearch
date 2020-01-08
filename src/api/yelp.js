import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Ja-5MbKrIfhvO7PxZfHK3zmWNpTDYPuvfPtfhQ9k8mCeDShW9FOj9_00mvLzu1XZt664eMx8osadildvsf_GgEGbqwzOoZf44txAU99iWWKr0dLBtI1964qU8SAVXnYx',
  },
});
