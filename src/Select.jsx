function Select({ handleChange }) {
  return (
    <select onChange={handleChange}>
      <option value="" defaultValue={true} hidden={true}>
        Filter by Region
      </option>
      <option value="All Region">All Region</option>
      <option value={"Europe"}>Europe</option>
      <option value={"Asia"}>Asia</option>
      <option value={"Africa"}>Africa</option>
      <option value={"Oceania"}>Oceania</option>
      <option value={"Americas"}>Americas</option>
      <option value={"Polar"}>Polar</option>
      <option value={"Antarctic Ocean"}>Antarctic Ocean</option>
      <option value={"Polar"}>Polar</option>
    </select>
  );
}

export default Select;
