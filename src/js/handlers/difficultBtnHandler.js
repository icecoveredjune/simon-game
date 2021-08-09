import store from '../source/store';

/**
 * @param  {} difficult
 * @returns {void}
 */
function difficultBtnHandler(difficult) {
  if (store.getState().gameIsRunning) {
    return;
  }
  const difficultBtns = document.getElementsByClassName('difficult');

  [...difficultBtns].forEach((btn) => {
    const button = btn;

    button.style.opacity = 0.65;
  });
  document.querySelector(`[data-difficult=${difficult}]`).style.opacity = 1;
  store.dispatch({
    type: 'CHANGE_DIFFICULT',
    difficult,
  });
}
export default difficultBtnHandler;
