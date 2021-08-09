import store from '../source/store';
import toggleStartBtnState from '../dom/toggleStartBtnState';
import errorNotificationTemplate from '../dom/errorNotificationTemplate';
import changeRoundCounter from '../dom/changeRoundCounter';

/**
 * @returns  {void}
 */
function wrongAnswerHandler() {
  const notification = document.querySelector('.notification > span');
  const { currentRound } = store.getState();

  store.dispatch({
    type: 'CLEAR_PROGRESS',
  });
  toggleStartBtnState();
  changeRoundCounter();
  notification.innerHTML = errorNotificationTemplate(currentRound);
  notification.parentElement.classList.add('visible');
}
export default wrongAnswerHandler;
