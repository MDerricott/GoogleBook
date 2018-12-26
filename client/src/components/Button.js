import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Button({children , props}) {
  return (
    <button onClick={props.handleSaveSubmit}>
      {children}
    </button>
  );
}

export default Button;