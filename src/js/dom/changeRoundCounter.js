import store from '../source/store';
/**
 * @returns {void}
 */
function changeRoundCounter() {
  const { currentRound } = store.getState();

  document.getElementsByTagName('tspan')[0].textContent = `${currentRound}`;
}
export default changeRoundCounter;
