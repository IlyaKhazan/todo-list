import { useEffect } from 'react';
import { DataList } from './features/datalist/DataList';
import { TodoInput } from '../src/components/TodoInput'
import { selectAllTodos, getData } from './features/datalist/todosSlice';
import { filterCards } from './util';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Container, Lists } from '../src/wrapper'

function App() {
  const cards = useAppSelector(selectAllTodos)
  const doneCards = filterCards(cards, true)
  const todoCards = filterCards(cards, false)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch])

  return (
    <Container>
      <TodoInput />
      <Lists>
        <DataList title='Todo' data={todoCards} />
        <DataList title='Done' data={doneCards} />
      </Lists>
    </Container>
  );
}

export default App;
