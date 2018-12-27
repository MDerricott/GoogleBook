import React from "react";
// import Button from "./Button"

function ResultList(props) {
  return (
      <div>
      {props.results.map(result => (
          <div key={result._id} id={result._id}> 

              Title: <a href={result.link}>{result.title}</a>
              <br/>
          Author: {result.author} 
          <br/>
          Description: {result.description}
            <br />
           Image: <img src={result.image} alt={result.title}/>
           <button onClick={props.handleDelete} id={result._id} >
      Delete
    </button>
          </div>

      ))}

</div>
    //     <li className="list-group-item" key={result.id}>
    //       <img alt={result.title} className="img-fluid" src={result.images.original.url} />
    //     </li>
    //   ))}
    // </ul>
  );
}

export default ResultList;
