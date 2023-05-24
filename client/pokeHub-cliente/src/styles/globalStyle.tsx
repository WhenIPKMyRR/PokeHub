import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`;

export const ContainerGlobal = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 428px !important;

  @media (max-width: 768px) {
    /* Estilos para tela com largura máxima de 768px */
  }

  @media (max-width: 480px) {
    /* Estilos para tela com largura máxima de 480px */
  }
`;
