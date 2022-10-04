import React from "react";

// function Greet(){
//     return <h1>Hello Dharm Jat</h1>
// }

const Greet = (props) => {
    console.log(props)

  return  (
    <div>

        <h1>Hello {props.name} heroName {props.heroName}</h1>
        {props.children}
    </div>
  )
};

export default Greet;
