// Imports

// Constants(type)
const SET_ASKCARD = "SET_ASKCARD";
const ADD_ASKCARD = "ADD_ASKCARD";
const SET_ANSWERCARD = "SET_ANSWERCARD";
const ADD_ANSWERCARD = "ADD_ANSWERCARD";

// Action Creators
function setAskCard(askCard) {
  return {
    type: SET_ASKCARD,
    askCard
  };
}

function addAskCard(newAskCard) {
  console.log(newAskCard);
  return {
    type: ADD_ASKCARD,
    newAskCard
  };
}

function setAnswerCard(answerCard) {
  return {
    type: SET_ANSWERCARD,
    answerCard
  };
}

function addAnswerCard(newAnswerCard) {
  console.log(newAnswerCard);
  return {
    type: ADD_ANSWERCARD,
    newAnswerCard
  };
}

// API Actions
function init() {
  return async (dispatch, getState) => {
    try {
      let response = await fetch('http://106.10.58.66:8888/fetchAskCard', {
        method: 'POST',
        headers: {
            'Accept': 'application/json;charset=UTF-8',
            'Content-Type': 'application/json;charset=UTF-8',
        }          
      })
      let json = await response.json();
      dispatch(setAskCard(json)); // render 1
    } catch(error) {
      console.log('error_init(1단계)');
    }
  }
}

// Initial State
const initialState = { } 

// Reducer
function reducer(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
    case SET_ASKCARD:
      return applySetAskCard(state, action);
    case ADD_ASKCARD:
      return applyAddAskCard(state, action);
    case SET_ANSWERCARD:
      return applySetAnswerCard(state, action);
    case ADD_ANSWERCARD:
      return applyAddAnswerCard(state, action);
  };
}

function applySetAskCard(state, action) {
  const { askCard } = action;
  console.log("applySetAskCard()가 실행중입니다. state.askCard === askCard: ", state.askCard === askCard);
  return {
    ...state,
    askCard
  };
}

function applyAddAskCard(state, action) {
  const { askCard } = state;
  console.log(askCard);
  const { newAskCard } = action;
  return {
    ...state,
    askCard: askCard.concat(newAskCard)
  };
}

function applySetAnswerCard(state, action) {
  const { answerCard } = action;
  return {
    ...state,
    answerCard
  };
}

function applyAddAnswerCard(state, action) {
  const { answerCard } = state;
  console.log(answerCard);
  const { newAnswerCard } = action;
  return {
    ...state,
    answerCard: answerCard.concat(newAnswerCard)
  };
}

// Exports
const actionCreators = {
  init
};

export { actionCreators };

export default reducer;

