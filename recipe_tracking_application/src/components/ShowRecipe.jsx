

function ShowRecipe({singlerecipe}){
    return (
        <div>
            <p>Title: {singlerecipe.title}</p>
            <p>Time to Cook: {singlerecipe.time}</p>
            <p>Ingredients: {singlerecipe.ingredients}</p>
            <p>Instructions: {singlerecipe.instructions}</p>
        </div>
    )
}

export default ShowRecipe;