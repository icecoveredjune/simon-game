import store from './store';
import highlightBtn from '../dom/highlightBtn';
import removeBtnhighlight from '../dom/removeBtnhighlight';
import changeRoundCounter from '../dom/changeRoundCounter';
import getRandomNumber from '../utils/getRandomNumber';
import playSound from '../utils/playSound';
import delay from '../utils/delay';

async function startNewRound() {
  const newIndex = getRandomNumber();

  store.dispatch({
    type: 'RESET_CLICKS_COUNTER',
  });
  store.dispatch({
    type: 'ADD_ORDER',
    highlightOrder: [newIndex],
  });
  store.dispatch({
    type: 'INCREMENT_ROUND',
  });

  changeRoundCounter();
  const order = store.getState().highlightOrder;
  // highlighting all buttons according to saved order and new one
  for (let i = 0; i < order.length; i++) {
    const btnIndex = order[i];

    highlightBtn(btnIndex);
    playSound(btnIndex);
    await delay(store.getState().highligtingInterval);
    removeBtnhighlight(btnIndex);
    // don't delaying after last iteration
    if (!(i + 1 === order.length)) {
      await delay(store.getState().delay);
    }
  }
  store.dispatch({
    type: 'WAITING_FOR_ANSWER_TOGGLE',
    waitingForAnswer: true,
  });
}

export default startNewRound;
