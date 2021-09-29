     
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

      `;

 
      export const PrimaryButton = styled(Button)`       
      background-color:${(props) => props.disabled ? "#343a40" : props.primary && "#6f42c1" };
      
       &:hover{           
           background-color:${({disabled}) => !disabled && "#5f3f9b" };
       }

      `
