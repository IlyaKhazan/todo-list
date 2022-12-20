export const filterCards = (cards: any[], boolean: boolean) => {
    return cards.filter(card => { return card.completed === boolean })
}