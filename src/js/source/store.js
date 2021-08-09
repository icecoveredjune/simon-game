const initialState = {
  gameIsRunning: false, // game state
  waitingForAnswer: false, // user possibility to answer
  highlightOrder: [], // buttons highlighting order
  delayBeforeStartNewRound: 1500,
  highligtingInterval: 250, // interval before remove btn highlighting
  difficult: 'easy',
  /**
   * delay between buttons highlighting, changed by difficult seting
   * (easy 1500, medium 1000, hard 500)
   *  */
  delay: 1500,
  clicksCounter: 0, // user's clicks counter
  currentRound: 0,
};
function createStore() {
  let state = initialState;

  return {
    dispatch: (value) => {
      switch (value.type) {
        case 'STATEPROGRESS_TOGGLE':
          state = {
            ...state,
            ...{
              gameIsRunning: value.gameIsRunning,
            },
          };
          break;
        case 'CLEAR_PROGRESS':
          state = {
            ...state,
            ...{
              gameIsRunning: false,
              waitingForAnswer: false,
              highlightOrder: [],
              clicksCounter: 0,
              currentRound: 0,
            },
          };
          break;
        case 'WAITING_FOR_ANSWER_TOGGLE':
          state = {
            ...state,
            ...{
              waitingForAnswer: value.waitingForAnswer,
            },
          };
          break;
        case 'ADD_ORDER':
          state = {
            ...state,
            highlightOrder: [...state.highlightOrder, ...value.highlightOrder],
          };
          break;
        case 'SET_DELAY':
          state = {
            ...state,
            ...{ delay: value.delay },
          };
          break;
        case 'INCREMENT_ROUND':
          state = {
            ...state,
            ...{ currentRound: ++state.currentRound },
          };
          break;
        case 'INCREMENT_CLICKS_COUNTER':
          state = {
            ...state,
            ...{ clicksCounter: ++state.clicksCounter },
          };
          break;
        case 'RESET_CLICKS_COUNTER':
          state = {
            ...state,
            ...{ clicksCounter: 0 },
          };
          break;
        case 'CHANGE_DIFFICULT':
          state.difficult = value.difficult;

          switch (state.difficult) {
            case 'easy':
              state = {
                ...state,
                ...{ delay: 1500 },
              };
              break;
            case 'medium':
              state = {
                ...state,
                ...{ delay: 1000 },
              };
              break;
            case 'hard':
              state = {
                ...state,
                ...{ delay: 500 },
              };
              break;
            default:
            //
          }
          break;
        default:
        //
      }
    },
    getState: () => ({ ...state }),
  };
}
const store = createStore();

export default store;
