import { useState } from 'react';
import './Country.css';
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(true);
    }

    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Region: {country?.region}</p>
            <p>Code: {country?.cca2}</p>
            <p>Population: {country?.population}</p>
            <button onClick={handleVisited}>Visited</button>
        </div>
    );
};

export default Country;