import './Country.css';
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Region: {country?.region}</p>
            <p>Population: {country?.population}</p>
        </div>
    );
};

export default Country;