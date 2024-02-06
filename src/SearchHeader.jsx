import { useState } from 'react';

function SearchHeader({ search }) {
  const [valueInput, setValue] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <div>
            <label className="form-label fw-bold">Search Photo?</label>
            <input type='search' className="form-control " value={valueInput} onChange={handleChange} placeholder='please enter what you want to search. ' />
       
        </div>
      </form>

    </div>
  );
}

export default SearchHeader;
