import React from "react";
import SlotM from "./SlotMach";



const App = () => {
  return <>
  <h1 className="heading_style"> π°WELCOME to <span style={ {fontWeight: "bold"}}>Slot machine game</span> </h1>
  <div clasName='slotmachine'>
  <SlotM x='π' y='π' z='π'/>
  <SlotM  x='π±βπ' y='π±βπ' z='π'/>
  <SlotM x='π' y='π' z='π'/>
  <SlotM x='β€' y='π' z='β€'/>
  </div>
  
  </>
  
}

export default App;

