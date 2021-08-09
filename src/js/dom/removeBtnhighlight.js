/**
 * @param  {Number} index pressed button index
 * @returns {void}
 */
function removeBtnhighlight(index) {
  document.querySelectorAll('.gameBtn')[index].style.opacity = 0.65;
}
export default removeBtnhighlight;
