import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${({ theme }) => theme.background.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
}
h1{
  font-size: ${({ theme }) => theme.fontSizes.extraLarge};
  color:${({ theme }) => theme.text.primary};
}
h2,
h3,
h4,
h5,
h6{
  font-size: ${({ theme }) => theme.fontSizes.large};
  color:${({ theme }) => theme.text.primary};
}
p{
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color:${({ theme }) => theme.text.third};
}
strong{
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color:${({ theme }) => theme.text.primary};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
}
a{
  color:${({ theme }) => theme.text.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
}
button{
  font-size: ${({ theme }) => theme.fontSizes.medium};
  background-color: ${({ theme }) => theme.background.third};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
}
li{
  color:${({ theme }) => theme.text.third};
}
label{
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color:${({ theme }) => theme.text.third};
}
`;

export const ContainerGlobal = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px !important;
  padding: 0px !important;

  @media (max-width: 768px) {
   
  }
  
  @media (max-width: 480px) {
    
  }
`;

export default GlobalStyle;

