
  
   import React from 'react'
import { Link } from 'react-router-dom'
import { LinkButton } from '../components/styled/ButtonStyles'
   
   function PublicHomePage() {
       return (
           <div>

               <h1 style={{textAlign:"center"}}>Public Page</h1>
              
                <LinkButton>
                <Link to="/login">Login Here</Link>
                </LinkButton>
                 
                 <LinkButton>
                 <Link to="/register">Sign Up Here</Link>
                 </LinkButton>
               
           </div>
       )
   }
   
   export default PublicHomePage
   