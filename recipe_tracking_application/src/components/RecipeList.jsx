import { useEffect } from "react";
import "./RecipeList.css"
import "../App.css";

function RecipeList({alldata, singleRecipe}){

    // const handleClick = (e)=>{
    //     singleRecipe(el);
        

    // }

    
    
    return (
        <div id="list">
            <h1>Recipe List</h1>
            
            
            <div className="flex">
                <div className="width"><h3>Name</h3></div>
                <div className="width"><h3>Time</h3></div>
            </div>
            
            {alldata.map((el,i)=>{
                
               return <div className="flex" key={i}>
                   <div className="width"><p  onClick={()=>{
                       singleRecipe(el);
                   }}>{el.title}</p></div>
                   <div className="width"><p>{el.time}</p></div>
                   
                   
               </div>
            })}
        </div>
    )
}

export default RecipeList;