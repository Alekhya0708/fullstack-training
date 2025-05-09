import './App.css';
import CalculatorParent from './Calculator';
import ParentComponent from './CounterApp';
import ParentMovieList from './FavMovies';
import ParentHandling from './FormHandling';
import ParentList from './ListofItems';
import ParentSearchFilter from './SearchFilter';
import ParentTempConverter from './TemperatureConverter';
import ParentToDo from './ToDoList';
import ParentToggle from './ToggleButton';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      <ParentHandling />
      <ParentToDo />
      <ParentToggle />
      <CalculatorParent />
      <ParentList />
      <ParentSearchFilter />
      <ParentTempConverter />
      <ParentMovieList />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
