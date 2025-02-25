import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
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
            <img src={flags?.png} alt="" className='img'/>
            <p>Region: {country?.region}</p>
            <p>Code: {country?.cca2}</p>
            <p>Population: {country?.population}</p>
            <button className='btn-1' onClick={passWithParams}>Mark visited</button>
            <br />
            <button className='btn-2' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country.': 'I want to visit'}
            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}>
            </CountryDetail>
        </div>
    );
};

export default Country;