/**
 * @param  {Number} index pressed button index
 * @returns {void}
 */
function playSound(index) {
  const audio = new Audio(`assets/sound/${index}.mp3`);

  audio.play();
}
export default playSound;
