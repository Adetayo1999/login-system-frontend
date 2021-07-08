
import React , {useEffect , useState}  from 'react';
  import "./App.css";
function App() {
  const [data , setData] = useState([]);
  const [error , setError] = useState(true);
   useEffect(() => {
          fetch("https://superheroapi.com/api/1953902318147814/search/dare")
          .then(res => res.json())
          .then(response => {
              setError(false);
               setData(response);

              //  console.log(response)
          })
          .catch(err => console.log(err.message))
   },[])
                  
             const backgroundImage = data.results && data.results[0].image.url;

             console.log(backgroundImage)

  return (
    <div className="app">
       <h1>Api Tutorial</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis accusamus, vero officia, harum repellat qui consequuntur velit aliquid, molestias error facilis a eligendi nam dolore corrupti beatae quo? Corrupti soluta hic autem recusandae perspiciatis veniam, debitis quia quaerat inventore?</p>

        <br/>

           <form action="">
             <input type="text" name="" id=""/>
             <input type="submit" value="Submit"/>
           </form>

           <br/>

          
          { 
               
               error ? <p>Files Are Loading </p> 
               :
               
          <div className="superHero"  style={{backgroundImage:`url(${backgroundImage})`}}>

                 <div className="overlay">

                        <h4>{}</h4>

                 </div>

          </div>


         }
                  


    </div>
  )
}

export default App
