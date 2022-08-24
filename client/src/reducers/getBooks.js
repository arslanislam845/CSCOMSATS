const getBooks=(state=[], action) => {
    switch (action.type) {
      case "GET BOOKS":
       
        return action.payload;
      
   
      default:
        return state;
    }
  };
export default getBooks;