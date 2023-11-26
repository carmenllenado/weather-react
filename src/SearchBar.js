import React from "react";
import Info from "./Info";

export default function SearchBar() {
  return (
    <div className="container box pb-0">
      <form id="search-form" className="mb-3 searchForm">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control shadow-sm"
              id="city-input"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <Info />
    </div>
  );
}
