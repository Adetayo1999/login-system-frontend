     
     import  styled from "styled-components";



  export const Button = styled.button`  
           padding: 1rem 2rem;      
           color:#fff;
           width:400px;
           background:#6c757d;
           display:block;
           font-family:roboto;
           outline:none;
           border:none;
           font-size:18px;
           border-radius:5px;
           margin: 20px auto;
           cursor:pointer;
         transition:0.3s ease-in;

         &:hover{
            transform:${({disabled}) => !disabled && "translateY(-2px)"};
         }

         
      @media(max-width:600px){
         width:300px;
         font-size:15px;
         padding:0.6rem 1.5rem;
         margin:15px auto;           
       }   
 

      `;

 
      export const PrimaryButton = styled(Button)`       
      background-color:${(props) => props.disabled ? "#343a40" : props.primary && "#6f42c1" };
      
       &:hover{           
           background-color:${({disabled}) => !disabled && "#5f3f9b" };
       }

      `

      export const LinkButton = styled(Button)`
        
          border-radius:999px;
          background-color:#6f42c1;
          margin:20px auto;
      
       a{
          text-decoration:none;
          color:#fff;
       }
     

          &:hover{           
              background-color:#5f3f9b;
          }
   
      
      `