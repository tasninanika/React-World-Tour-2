import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    console.log(country);
    const {name, flags} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Region: {country?.region}</p>
            <p>Code: {country?.cca2}</p>
            <p>Population: {country?.population}</p>
            <button onClick={passWithParams}>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.': 'I want to visit'}
        </div>
    );
};

export default Country;