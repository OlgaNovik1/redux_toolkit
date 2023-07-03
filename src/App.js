import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/header";
import RecipeItem from "./components/recipeItem/recipeItem";
import User from "./components/user/User";
import { useGetRecipesQuery } from "./store/api/api";


function App() {

  const userId = 1;

  const { isLoading, data, error } = useGetRecipesQuery(undefined, {
    skip: !userId,
  });
  // console.log(data)
  // console.log(isLoading)
  // console.log(error)



  return (
    <section>
      <Header />
      <User />
      <CreateRecipe />
      <div className="App">
        {isLoading
          ?
          <div>LOADING...</div>
          :
          error
            ?
            <div>Ошибка при получении рецептов...</div>
            :
            data
              ?
              data.map(recipe =>
                <RecipeItem recipe={recipe} key={recipe.id} />
              )
              :
              <div>Рецептов нет</div>
        }
      </div>
    </section>
  );
}

export default App;
