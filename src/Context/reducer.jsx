
export const initialState = {
      usertoken:"",
      usermail:"",
      username:""
}




export const actionTypes = {
    SET_ACCESS_TOKEN:"SET_ACCESS_TOKEN",
    SET_USER_EMAIL:"SET_USER_EMAIL"
}


const reducer = (currentState , action) => {
         
      switch(action.type){
      
         case actionTypes.SET_ACCESS_TOKEN:
             return {
                 ...currentState,
                 usertoken: action.token
             }

             case actionTypes.SET_USER_EMAIL:
                 return{
                     ...currentState,
                     usermail:action.mail,
                     username:action.username
                 }
         
           default:
               return currentState;

      }


}


export default reducer;