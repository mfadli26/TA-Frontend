export const addTodo = (data) => ({
  type: 'ADD_TODO',
  data,
});

export const logout = () => ({
  type: 'LOGOUT'
});