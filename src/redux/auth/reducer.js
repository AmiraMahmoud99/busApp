import update from 'react-addons-update';




function handlerLogin(state, action) {
  return update(state, {
    user: { $set: action.payload },
  });
}



function handlerLogOut(state, action) {
  return update(state, {
    user: { $set: {} },
  });
}



export { handlerLogin, handlerLogOut };
