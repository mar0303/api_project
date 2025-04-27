import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'; 

function App() {
  const [count, setCount] = useState(0); 
  const [searchTerm, setSearchTerm] = useState(''); 
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
  if (isLoading) {
    return <div>Loading ...</div>
  } if (error) {
    return <div> Error: {error} </div>
  }

  return (
    <div className="container"> 
    <h1>Länder und Hauptstädte</h1>
    <ul>
      {countries.map((country)=> (
        <li key= {country.cca3}>
           <h2>{country.name.common} </h2>
           <p>{country.capital?.[0] || "N/A"}</p>
           {country.flags?.png && 
           <img src= {country.flags.png} 
            className= "country-flag"
           alt= {`Flag of ${country.name.common}`} />}
        </li>
      ))}
    </ul>
    </div> 
    
    
  );
}

export default App;
