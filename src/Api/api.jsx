import axios from 'axios';

const GetRopa = async () => {
  try {
    const api = 'https://fakestoreapi.com/products';
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; 
  }
};

export default GetRopa;


