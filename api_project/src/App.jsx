import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'; 

function App() {
  const [count, setCount] = useState(0); 

  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  return (
    <>
    </>
  );
}

export default App;
