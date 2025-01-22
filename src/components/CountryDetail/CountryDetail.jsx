import CountryData from "../CountryData/CountryData";

const CountryDetail = ({country, handleVisitedCountry, handleVisited}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData>
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisited={handleVisited}
            </CountryData>
        </div>
    );
};

export default CountryDetail;