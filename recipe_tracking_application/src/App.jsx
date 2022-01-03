import { useEffect, useState } from 'react';
import './App.css';
import ReciceForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import ShowRecipe from './components/ShowRecipe';

function App() {
  const[alldata,setAllData] = useState([]);
  const[singlerecipe, setSingleRecipe] = useState([]);
  const[flag, setFlag] = useState(false);
  
  const getallData =(data)=>{

    

    
    setAllData(data);

  }
  console.log(alldata);

  const singleRecipe = (data)=>{
    setSingleRecipe(data);
    setFlag(true);

  }

   
  return (
    <div id='main'>
      <div>
        <ReciceForm  getallData={getallData}/>

        <RecipeList alldata={alldata} singleRecipe={singleRecipe}/>

      </div>

      {flag?(<div className='center' >
        <ShowRecipe singlerecipe={singlerecipe} />

      </div>):null

      }

      
      
        
      

      
      
    </div>
  );
}

export default App;
