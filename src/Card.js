const Card = (props) => {
  return (
    <div className="gri">
      {props.countriesData.map((country) => (
        <div key={country.alpha3Code} className="card">
          <img
            src={country.flags.png}
            alt={country.name + " Flag"}
            className="image"
          />
          <div className="info">
            <h2>{country.name}</h2>
            <p>
              <b>Population: </b>
              {country.population}
            </p>
            <p>
              <b>Region: </b>
              {country.region}
            </p>
            <p>
              <b>Capital: </b>
              {country.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
