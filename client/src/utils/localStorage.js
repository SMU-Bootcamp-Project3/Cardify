export const getSavedCardIds = () => {
    const savedCardkIds = localStorage.getItem('saved_cards')
      ? JSON.parse(localStorage.getItem('saved_cards'))
      : [];
  
    return savedCardIds;
  };
  
  export const saveCardIds = (cardIdArr) => {
    if (cardIdArr.length) {
      localStorage.setItem('saved_cards', JSON.stringify(cardIdArr));
    } else {
      localStorage.removeItem('saved_cards');
    }
  };
  
  export const removeCardId = (cardId) => {
    const savedCardIds = localStorage.getItem('saved_card')
      ? JSON.parse(localStorage.getItem('saved_card'))
      : null;
  
    if (!savedCardIds) {
      return false;
    }
  
    const updatedSavedCardIds = savedCardIds?.filter((savedCardId) => savedCardId !== cardId);
    localStorage.setItem('saved_cards', JSON.stringify(updatedSavedCardIds));
  
    return true;
  };
  