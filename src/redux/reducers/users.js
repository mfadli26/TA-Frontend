const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return action.data;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

// const users = (state = [], action) => {
//   console.log(state)
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         user(undefined, action),
//       ];
//     default:
//       return state;
//   }
// };

export default user;