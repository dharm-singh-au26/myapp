import React from "react";

// function Greet(){
//     return <h1>Hello Dharm Jat</h1>
// }

const Greet = (props) => {
    // console.log(props)
    const {name,heroName} = props

  return  (
    <div>

        <h1>Hello {name} heroName {heroName}</h1>
        {props.children}
    </div>
  )
};

export default Greet;
