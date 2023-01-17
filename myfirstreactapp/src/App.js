import { useState } from 'react';
  import './App.css';
import Godabeg from './Godabeg';


function App() {
  let name = "Seun";
  const age = 21;


  const [userName, setUserName] = useState('Suya')
function changeName (){
  setUserName('Pizza is neat')
}
//e.PreventDefault(); will stop your page from reloading when a form is submitted
const peeps = ['Halima', 'Seun', 'Raddie', 'Gabe', 'Halima', 'Ola', 'Demilade','Temi']

  return(
    <div>
      <h1 className='something'>Hello {name}</h1>
      {age >= 18 ? <p>You are a big girl oo</p> : <p>You are a small girl </p>}
      <p>Hi {name} you are {age} years old</p>
      <p>{userName}</p>
      <button onClick={changeName}>Click me</button>
      <Godabeg un={userName}/>

      {peeps.map((cur, index) => <h1 key={index}>{cur}</h1>)}














    </div>
  
  );
}

export default App;
// State: Javascript object that tells your js app what to look like at a time

// hooks: Use state(To create a state), Use Context, Use Effect(To fetch data from apis), Use Ref, Use Memo
