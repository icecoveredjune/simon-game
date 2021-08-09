import store from '../source/store';

/**
 * @returns {void}
 */
function toggleStartBtnState() {
  const startBtn = document.getElementsByClassName('startBtn')[0];

  startBtn.classList.toggle('disabled');
  if (store.getState().gameIsRunning) {
    startBtn.querySelectorAll('g')[1].style.fill = '#28b463';
  } else {
    startBtn.querySelectorAll('g')[1].style.fill = '#ef5261';
  }
}
export default toggleStartBtnState;
