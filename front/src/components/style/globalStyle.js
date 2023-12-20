import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bgColor};
    transition: 0.35s;
  }
  .toggle span,
  .MainContainer .table .tbody .tr div:nth-child(2) {
   background: ${({ theme }) => theme.bgColor2};
   transition: 0.35s;
  }
  .search-container input {
   background: ${({ theme }) => theme.bgColor};
    color:${({ theme }) => theme.txtColor};
  }
  .search-container input::placeholder{
    color:${({ theme }) => theme.txtColor};
  }
  .search-logo {
    color:${({ theme }) => theme.txtColor};
  }
  .search-desc{
    color:${({ theme }) => theme.txtColor};
  }
  .isItHim .thead {
   background: ${({ theme }) => theme.bgColor3};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
  .isItHim .thead span:nth-child(1),
  .isItHim .findHim .charNames span:nth-child(1) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
  .isItHim .thead span:nth-child(2),
  .isItHim .findHim .charNames span:nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
  
  .isItHim .thead span:nth-child(3),
  .isItHim .findHim .charNames span:nth-child(3) {
    border-right: 1px solid ${({ theme }) => theme.borderColor};
  }
  .isItHim .findHim .charNames {
   background: ${({ theme }) => theme.bgColor3};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }
  .ReactModal__Content {
    background: ${({ theme }) => theme.bgColor3}!important;
  }
`;