
  import React , {useEffect} from 'react'
  import { PrimaryButton } from '../components/styled/ButtonStyles'
import { defaultURL } from '../consts';
  import { UseTokenContext } from '../Context/Context'
  import { actionTypes } from '../Context/reducer';
  
  function Dashboard() {
     const [state , dispatch] = UseTokenContext();


          useEffect(() => {
               
              fetch(`${defaultURL}/user` , {
                method:"POST",
                headers:{
                  "Content-Type":"application/json",
                  "authorization": `Bearer ${state.usertoken}`
                }
              })
              .then(res => res.json())
              .then(result => {
                  
                   if(result.data){
                        const {email, name } = result.data
                      dispatch({
                        type:actionTypes.SET_USER_EMAIL,
                        mail:email,
                        username:name
                      })

                   }

              })
              .catch(error => console.log(error.message))
              
           

          },[])

    
    const handleLogOut = () => {         
      fetch(`${defaultURL}/logout` , {
        method:"POST",
        credentials:"include",
        headers:{
          "Content-Type":"application/json",
        }
      })
      .then(res => res.json())
      .then(data => {
              dispatch({
                type:actionTypes.SET_ACCESS_TOKEN,
                token:""
              })
      })
      .catch(error => console.log(error));


    }


      return (
          <div>
           <h1>Dashboard For {state.username} </h1>   


                 <PrimaryButton type="button" primary onClick={handleLogOut} >Log Out</PrimaryButton>

          </div>
      )
  }
  
  export default Dashboard
  