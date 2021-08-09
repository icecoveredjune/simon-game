import './css/index.css';
import startBtnHandler from './js/handlers/startBtnHandler';
import gameBtnHandler from './js/handlers/gameBtnHandler';
import difficultBtnHandler from './js/handlers/difficultBtnHandler';

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementsByClassName('startBtn')[0];
  const wrapper = document.getElementsByClassName('container')[0];

  wrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('gameBtn')) {
      gameBtnHandler(e);
    }
    if (e.target.classList.contains('newGame')) {
      startBtnHandler(e);
    }
    if (e.target.classList.contains('difficult')) {
      const difficult = e.target.getAttribute('data-difficult');

      difficultBtnHandler(difficult);
    }
  });
  startBtn.addEventListener('click', startBtnHandler);
});
