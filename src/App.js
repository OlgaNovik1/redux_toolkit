import Header from "./components/header/header";
import RecipeItem from "./components/recipeItem/recipeItem";


function App() {
  return (
    <section>
      <Header />
      <div className="App">
        <RecipeItem recipe={{
          id: 1,
          name: 'Лазанья',
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Каша',
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Паста',
        }} />
      </div>
    </section>

  );
}

export default App;
