
// const BASE_URL ='http://localhost:8080';
// const BASE_URL ='https://rag-using-singlestore-database-and-cohere.onrender.com';
const BASE_URL ='https://rag-using-singlestore-database-and.vercel.app';
// 


export const API_URLS = {
  CHATBOT: {
    ABOUT: `${BASE_URL}/chatbot/about/`,
  },
  HIREME: {
    RECRUITER: `${BASE_URL}/contact/hireme/`,
  },
  CONTACT : {
    MESSAGE: `${BASE_URL}/contact/general/`,
  },
  CLIENT : {
    TESTIMONIAL: `${BASE_URL}/contact/client/`,
  },
};

export default API_URLS;