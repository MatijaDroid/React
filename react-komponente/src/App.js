import React from 'react';
import WelcomeFunction from "./components/WelcomeFunction/WelcomeFunction";
import WelcomeClass from "./components/WelcomeClass/WelcomeClass";

function WelcomeFunction1(){
  return <h1>Welcome funkcija react komponente u App.js</h1>
}

class WelcomeClass1 extends React.Component{
    render(){
      return(<h2>Welcome klasa react komponente u App.js</h2>);
    }
}

function App() {
  return (
    <div>
      <WelcomeFunction1/>
      <WelcomeClass1/>
      <WelcomeFunction/>
      <WelcomeClass/>
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
