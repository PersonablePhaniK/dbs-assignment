import React, { useState } from "react";
import "./App.css";
import CountryItem from "./components/countryItem";

function App() {
  const [countries, setCountries] = useState([
    "Select a location",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Philippines",
    "Thailand",
    "India",
    "USA",
    "UK",
    "Australia",
    "Canada",
    "Russia",
  ]);
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState("Select a location");
  const [filterDisplay, setFilterDisplay] = useState(countries);
  const [showItms, setShowItms] = useState(6);
  const [userAccess, setUserAccess] = useState(true);

  const updateData = () => {
    let val = [...countries];
    val.push(search);
    setCountries(val);
  };

  const editSearch = (e) => {
    if (e !== "") {
      setSearch(e.target.value);
      setFilterDisplay(
        countries.filter((name) =>
          name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilterDisplay(...countries);
    }
  };

  const dynamicSearch = () => {
    return countries.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const countrySelection = (e) => {
    if (e !== "") {
      setSelection(e.target.value);
      setFilterDisplay(
        countries.filter((name) =>
          name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setFilterDisplay(...countries);
    }
  };

  const showCompleteList = (e) => {
    setShowItms(filterDisplay.length);
  };

  return (
    <div className="App">
      <select
        name="countries"
        id="countries"
        value={selection}
        onChange={countrySelection}
      >
        {countries.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
          // <li key={i}>{i}</li>
        ))}
      </select>
      <input
        type="text"
        value={search}
        onChange={editSearch}
        placeholder="Search..."
        style={{ width: "90%", margin: "15px" }}
      />
      <div style={{ display: "flex" }}>
        {filterDisplay === "" ? (
          <p style={{ marginLeft: "30px", width: "100%" }}>
            <span style={{ marginRight: "50px" }}>"{search}" not found</span>
            {userAccess  && <button onClick={updateData}> Add & Select</button>}
            
          </p>
        ) : (
          <>
            <ul>
              {filterDisplay.slice(0, showItms).map((i, index) => (
                <CountryItem country={i} key={i} index={index} />
              ))}
            </ul>
            {
              <span
                style={{
                  marginLeft: "auto",
                  marginTop: "auto",
                  marginBottom: "20px",
                  marginRight: "20px",
                  cursor: "pointer",
                }}
                onClick={showCompleteList}
              >
                {filterDisplay.length - showItms} more...
              </span>
            }
          </>
        )}
      </div>
    </div>
  );
}

export default App;
