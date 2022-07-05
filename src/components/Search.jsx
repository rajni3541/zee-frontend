import TextField from '@mui/material/TextField';


import { useState } from "react";

const Search = ({
  searching, dateFilter,dateToFilter
}) => {
  const [filters, setFilters] = useState({
    name: "",
    from: "",
    to: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        searching(value);
        break;
      case "from":
        dateFilter(value, "from");
        break;
      case "to":
        dateToFilter(value, "to");
        break;
      default:
        break;
    }
  };

  return (
    <>
        <div className="left">
                <span>movies</span>
        </div>
        <div className="row my-5" style={{marginTop: '50px'}}>
      <TextField
        id="name"
        label="Search For Movie"
        onChange={handleInput("name")}
        style={{width: '700px'}}
      /> 
      <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr',gap: '10px', marginTop: '10px', maxWidth: '700px'}}>
      <div className="col-sm-12 my-2" >
        <label htmlFor="startDate">From : </label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
          style={{width: '100%', padding: '10px'}}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To : </label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
          style={{width: '100%',padding: '10px'}}
        />
      </div>
      </div>
    </div>
    </>
  );
};

export default Search;

