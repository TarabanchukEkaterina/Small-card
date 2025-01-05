import styled from 'styled-components';

// чтобы все ссылочки выстроильсь в ряд в ul display: flex;
export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: green;
    }

    li + li {
      margin-left: 20px;
    }
  }
`