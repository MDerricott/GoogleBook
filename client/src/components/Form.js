// import React from "react";


// function Form (props) {
 
//     return (
//       <div>
       
//         <form className="form">
//           <input
//             value={props.searchTerm}
//             name="searchTerm"
//             onChange={props.handleInputChange}
//             type="text"
//             placeholder="Search Term"
//           />
    
        
//           <button onClick={props.handleFormSubmit}>Submit</button>
//         </form>
//       </div>
//     );
//   }


// export default Form;


import React from "react";

function Form(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.searchTerm}
          name="searchTerm"
          type="text"
          className="form-control"
          placeholder="Search for Books"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
