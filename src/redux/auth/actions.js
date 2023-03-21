import Actions from './actionConstants';
 


export function saveDataUser(data) {
  return (dispatch, store) => {
    console.log(data);
    dispatch({
      type: Actions.LOGIN,
      payload: data,
    });
  };
}

export function logOut() {
  return (dispatch, store) => {
    dispatch({
      type: Actions.LOGOUT,
      payload: {},
    });


  };
}
