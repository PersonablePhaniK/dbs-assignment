import React from "react";

function countryItem({ country }) {
  return <div>{country === 'Select a location' ? '' : country}</div>;
}

export default countryItem;
