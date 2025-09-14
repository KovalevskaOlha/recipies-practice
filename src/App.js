import './App.css';
import { RecipiesList } from './components/RecipiesList/RecipiesList';
import { MainTitle } from './components/MainTitle/MainTitle';

function App() {
  return (
    <div className="App">
      <main>
        <MainTitle text="Food Collection" />
        <RecipiesList />
      </main>
    </div>
  );
}

export default App;
