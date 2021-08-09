import store from '../source/store';
import startNewRound from '../source/startNewRound';
import delay from '../utils/delay';
import highlightBtn from '../dom/highlightBtn';
import removeBtnhighlight from '../dom/removeBtnhighlight';
import wrongAnswerHandler from './wrongAnswerHandler';
import playSound from '../utils/playSound';

async function gameBtnHandler(e) {
  // check if app ready to handle user's click\answer
  if (!store.getState().waitingForAnswer) {
    return;
  }
  const element = e.target;
  // get clicked button position
  const index = [...document.querySelectorAll('.gameBtn')].indexOf(element);
  // which index from order need to compare now
  const currentCompareIndex = store.getState().clicksCounter;
  // get current answer from order
  const currentAnswer = store.getState().highlightOrder[currentCompareIndex];

  highlightBtn(index);
  playSound(index);
  delay(store.getState().highligtingInterval).then(() =>
    removeBtnhighlight(index),
  );
  // if answer is correct
  if (index === currentAnswer) {
    store.dispatch({ type: 'INCREMENT_CLICKS_COUNTER' });
    // check if user gave all answers
    if (store.getState().highlightOrder.length === currentCompareIndex + 1) {
      store.dispatch({
        type: 'WAITING_FOR_ANSWER_TOGGLE',
        waitingForAnswer: false,
      });
      await delay(store.getState().delayBeforeStartNewRound);
      startNewRound();
    }
  } else {
    wrongAnswerHandler();
  }
}
export default gameBtnHandler;
