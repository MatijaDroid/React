import Person from './Person';
import {sum, num1, num2} from './Utility';
import {sum as zbroji} from './Aritmetics';

import * as MathOps from './Aritmetics'; 

function App(){
  return (
    <div>
      <p> {Person.name } </p>
      <p>{sum(2,5)}</p>
      <p>{sum(num1,num2)}</p>
      <p>{zbroji(num1,50)}</p>

      <p> { MathOps.div(6,2)}</p>
      <p> { MathOps.sub(6,2)}</p>
      <p> { Math.random(6,2)}</p>
    </div>  //u reactu mora postojati parent element
  );
}

export default App;
