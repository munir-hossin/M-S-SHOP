

const sortedBooksReducer = (state, action) => {
    switch (action.type) {
      case 'filterByStatus': {
  
        const filtered = state.filter((book) => book.status === action.status);
        return filtered;
      }
  
      case 'handleSortByName': {
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      }
  
      case 'sortByPrice': {
        return [...state].sort((a, b) => a.price - b.price);
      }
  
      case 'sortByRating': {
        return [...state].sort((a, b) => a.rating - b.rating);
      }
  
      case 'sortByTrending': {
        return [...state].sort((a, b) => b.rating - a.rating);
      }
  
      default:
        return state;
    }
  };
  

  export default sortedBooksReducer;