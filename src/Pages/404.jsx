

   import React from 'react'
   import {Link} from "react-router-dom";
   

   function NotFoundPage() {
       return (
           <div className="invalidpage">
                    
                    <div className="scary">

                         &#127875;

                    </div>


               <p>Oops , Seems You're lost <Link to="/"> Go Home </Link></p>
               
           </div>
       )
   }
   
   export default NotFoundPage
   