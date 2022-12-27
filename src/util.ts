import { Todo } from '../src/types'

export const filterCards = (cards: Todo[], boolean: boolean): Todo[] => {
    return cards.filter((card): boolean => { return card.completed === boolean })
}