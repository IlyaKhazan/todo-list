import './App.css';
import { TodoList } from './features/datalist/TodoList';
import { DoneList } from './features/datalist/DoneList';
import { TodoInput } from './features/datalist/TodoInput';
import styled from 'styled-components';

function App() {

  const StyledContainer = styled.div`
  padding: 50px;
  display: grid;
  justify-items: center;
  `
  const StyledLists = styled.div`
  display: flex
  `

  return (
    <StyledContainer>
      <div className='logo'>
        <img src="" alt="" />
      </div>
      <TodoInput />
      <StyledLists>
        <TodoList />
        <DoneList />
      </StyledLists>
    </StyledContainer>
  );
}

export default App;
