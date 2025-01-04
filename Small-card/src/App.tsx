import './App.css';
import {Button, SuperButton} from './components/Button.styled';
import {Link} from './components/Link.styled';
import {Menu} from './components/Menu.styled';
import {Box} from './components/Box.styled';

function App() {

  return ( 
      <>
      <Menu>{/* стандартная разметка  Menu*/}
        <ul>{/* ul>li*3>a */}
          <li><a href="">menu item 1</a></li>
          <li><a href="">menu item 2</a></li>
          <li><a href="">menu item 3</a></li>
        </ul>
      </Menu>
        <Box>
          {/* отображаем на основе другого компонента */}
          <Button as={Link} href={'#'}>LinkComponent</Button>
          {/* отображаем кнопку как ссылку чтобы не повторять стили */}
          <Button as='a' href={'#'}>Link</Button>
          <Button>Hello</Button>
          <SuperButton>SuperButton</SuperButton>
        </Box>
      </>
  )
}

export default App;