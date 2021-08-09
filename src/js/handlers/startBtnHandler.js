import store from '../source/store';
import delay from '../utils/delay';
import startNewRound from '../source/startNewRound';
import toggleStartBtnState from '../dom/toggleStartBtnState';

async function startBtnHandler(e) {
  if (store.getState().gameIsRunning) {
    return;
  }
  e.preventDefault();

  document
    .getElementsByClassName('notification')[0]
    .classList.remove('visible');
  store.dispatch({ type: 'STATEPROGRESS_TOGGLE', gameIsRunning: true });
  toggleStartBtnState();
  await delay(500);
  startNewRound();
}
export default startBtnHandler;
