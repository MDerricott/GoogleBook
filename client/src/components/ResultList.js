import React from "react";
import Button from "./Button"

function ResultList(props) {
  return (
      <div>
      {props.results.map(result => (
          <div key={result.id} id={result.id}> 

              Title: {result.volumeInfo.title}
              <br/>
          Author: {result.volumeInfo.authors} 
          <br/>
          Description: {result.volumeInfo.description}
            <br />
           Image: <img src={result.volumeInfo.imageLinks.thumbnail} alt={result.volumeInfo.title}/>
          <Button> Save Book </Button>
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
