import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (data) => {
    setLoading(true);
    try {
      await wait(2000); // Simulates network delay
      const random = Math.random();
      if (random < 0.5) {
        throw new Error("Simulated network error");
      }
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: 'error',
        message: error.message || 'Something went wrong, please try again later!',
      });
    } finally {
      setLoading(false);
    }
  };
  

  return { isLoading, response, submit };
}

export default useSubmit;
