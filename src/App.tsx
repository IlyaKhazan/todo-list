import { DataList } from './features/datalist/DataList';
import { TodoInput } from './features/datalist/TodoInput';
import { selectAllTodos } from './features/datalist/todosSlice';
import { filterCards } from './util';
import { getData } from './features/datalist/todosSlice';
import { useAppDispatch } from './app/hooks';
import { useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const cards = useAppSelector(selectAllTodos)
  const doneCards = filterCards(cards, true)
  const todoCards = filterCards(cards, false)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch])


  const StyledContainer = styled.div`
  padding: 50px;
  display: grid;
  justify-items: center;
  `
  const StyledLists = styled.div`
  display: flex;
  gap: 50px;
  `

  return (
    <StyledContainer>
      <TodoInput />
      <StyledLists>
        <DataList title='Todo' data={doneCards} />
        <DataList title='Done' data={todoCards} />
      </StyledLists>
    </StyledContainer>
  );
}

export default App;
