import Header from "./components/header/header";
import RecipeItem from "./components/recipeItem/recipeItem";
import User from "./components/user/User";


function App() {
  return (
    <section>
      <Header />
      <User />
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
