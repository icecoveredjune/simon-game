/**
 * @param  {Number} index button index
 * @returns {undefined}
 */
function highlightBtn(index) {
  document.querySelectorAll('.gameBtn')[index].style.opacity = 1;
}
export default highlightBtn;
