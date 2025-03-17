import './App.css';
import Instructions from './Instruction';
import Nutrition from './Nutrition';
import Ingredients from './Ingredients';
function App() {
  return (
    <div className="container1">
      <div className="recipe-container">
        <img src="omelette.jpeg" alt="Delicious omelette" />
        <h1>Simple Omelette Recipe</h1>
        <p style={{
          lineHeight: '1.5'
          }}>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <Preptime />
        <Ingredients />
        <hr />
        <Instructions />
        <hr />
        <Nutrition />
      </div>
    </div>
  );
}

function Preptime() {
  return (
    <div className="preptime">
      <h3>Preparation time</h3>
      <ul>
        <li><strong>Total:</strong> Approximately 10 minutes</li>
        <li><strong>Preparation:</strong> 5 minutes</li>
        <li><strong>Cooking:</strong> 5 minutes</li>
      </ul>
    </div>
  );
}

export default App;
