import axios from "axios";


const BaseURL = 'https://youtube-v31.p.rapidapi.com/search'
const options = {
  
  url: BaseURL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BaseURL}/${URL}`, options);
    return data;
}

