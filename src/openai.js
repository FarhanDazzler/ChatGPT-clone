// const { Configuration, OpenAIApi } = require("openai");
/*
const apiKey = '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';
// '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';


const configuration = new Configuration({
  apiKey: apiKey
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
//   let retries = 0;
//   const maxRetries = 5; // Maximum number of retries
//   const baseDelay = 3000; // Base delay in milliseconds

//   while (retries < maxRetries) {
//     try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ['/']
      });

      return res.data.choices[0].text;
    } 
//     catch (error) {
//       if (error.response && error.response.status === 429) {
//         const delay = baseDelay * Math.pow(2, retries); // Exponential backoff
//         await new Promise(resolve => setTimeout(resolve, delay));
//         retries++;
//       } else {
//         console.error('Error in sendMsgToOpenAI:', error);
//         throw error;
//       }
//     }
//   }

//   throw new Error('Reached maximum retries, still getting 429 error. Check API usage.');
// }

*/

export const sendMsgToOpenAI = async (msg) => {
    const API_URL = "https://api.openai.com/v1/completions";
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: msg,
        temperature: 0.2,
        max_tokens: 2048,
        n: 1,
        stop: null,
      }),
    };
    try {
      const response = await (fetch(API_URL, requestOptions)).json();
      return response.data?.choices[0].text;
    } catch (error) {
      console.log(error);
    }
  };
  
 /* const apiKey = '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';
  const API_URL = 'https://api.openai.com/v1/completions';
  
  async function sendMsgToOpenAI(message) {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: message,
          temperature: 0,
          max_tokens: 100,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ['/']
        })
      };
  
      const response = await (await fetch(API_URL, requestOptions)).json();
      return response.data.choices[0].text;
    } catch (error) {
      console.error('Error in sendMsgToOpenAI:', error);
      throw error;
    }
  }
  
  export { sendMsgToOpenAI };
  
  
  */