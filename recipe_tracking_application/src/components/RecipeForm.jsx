//title, ingredients, time to cook, an image and instructions
import { useState, useEffect } from "react";
import "./RecipeForm.css";


function RecipeForm({getallData}){
    const[formData, setFormData] = useState({
        title:"",
        ingredients:"",
        time:0,
        instructions:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;

        formData[name] = value;

        setFormData({...formData});
        console.log(formData);
    }

    useEffect(()=>{
       getdata();
    
    },[])

    function getdata(){
        fetch("http://localhost:3001/recipes")
        .then(res => res.json())
        .then(res => {getallData(res);
        console.log(res)});

    }

    

    const handleSubmit = (e)=>{
        e.preventDefault();

        fetch("http://localhost:3001/recipes",{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type" : "application/json"
            }

        }).then(()=>{
            getdata();
        })

    }
    return (
       <div id="form">
           <h1>Recipe</h1>
           <form onSubmit={handleSubmit}>
               <input type="text" name="title" placeholder="title" onChange={handleChange}/>
               <input type="text" name="ingredients" placeholder="ingredients" onChange={handleChange} />
               <input type="number" name="time" placeholder="time to cook"onChange={handleChange} />
               <input type="text" name="instructions" placeholder="instructions" onChange={handleChange}/>
               <input type="submit" value="Add Recipe" style={{width:"200px",marginLeft:"auto",marginRight:"auto"}}/>
           </form>
       </div>
    )
}

export default RecipeForm;