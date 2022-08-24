const createPosts=(state=[], action) => {
    switch (action.type) {
        case "CREATE POSTS":
            return action.payload;
      
        default:
            return state;
    }
  };
export default createPosts;