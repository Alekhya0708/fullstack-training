import logo from './logo.svg';
import './App.css';
import Count from './Counter';
import ToggleVisibility from './ToggleVisibility ';
import ParentComponet from './ParentChild';
import Parent from './PassPropsHE';
import Cart from './ShoppingCart';
import UserList,{usersObj} from './UserComponet.js';
import ParentComponetOfGreeting from './GreetingComponent.js';
import ParentProp from './FunctionProp.js';
import InputForm from './FormInput.js';
import Grandparent from './PropDrilling.js';
import ParentComponent1 from './Movies.js';
function App() {
  return (
    <div>
    <ParentComponent1 />
    <h1> Hello World </h1>
    <Count />
    <ToggleVisibility />
    <ParentComponet />
    <Parent />
    <Cart />
    <UserList usersObj={usersObj}/>
    <ParentComponetOfGreeting />
    <ParentProp />
    <InputForm />
    <Grandparent />
    </div>
  );
}
export default App;
