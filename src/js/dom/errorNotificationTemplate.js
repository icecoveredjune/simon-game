const errorNotificationTemplate = (currentRound) =>
  `Sorry, you lost after ${currentRound} rounds. <br>Want to <a href="#" class="newGame">try</a> again?<br><span class="hint">You can change difficult by pressing green(easy), yellow(medium) or red(hard) dots</span>`;

export default errorNotificationTemplate;
