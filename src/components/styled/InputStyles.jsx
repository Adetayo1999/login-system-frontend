import  styled from "styled-components";



export const InputTag = styled.input`       
     padding:1rem 1.5rem;
     width:400px;
     background:black;
     border:1px solid  ${({error}) => error ? "#dc3545" : "#343a40"};
     outline:none;
    border-radius:5px;
   color:#fff;
   display:block;
   font-size:18px;
   transition:0.3s ease-in;

   &:hover{
       border-color:${({error}) => !error && "#6c757d" };
   }
 
   &:focus{
        border-color:#6f42c1;
   }

`
