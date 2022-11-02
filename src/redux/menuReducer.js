const PLAY = 'PLAY';
const INCR_MODE = 'INCR_MODE';
const DECR_MODE = 'DECR_MODE'

let initialState = {
    numberItems: '',
    numberCount: '',
    gameMode: ''
}

const menuReducer = (state = initialState, action) => {
switch (action.type) {
    case PLAY:
        let items = action.numberItemsBody,
            count = action.numberCountBody
            // mode = action.gameModeBody
    return  {
        ...state,
        numberItems: items,
        numberCount: count,
        // gameMode: mode
    };
    case INCR_MODE:
    return {
        ...state,
        gameMode: true
    };
    case DECR_MODE:
    return {
        ...state,
        gameMode: false
    };
    default:
    return state;
    }
}

export const playCreator = (numberItemsBody, numberCountBody) =>
 ({type: PLAY, numberItemsBody, numberCountBody});

export const incrCreator = () =>
 ({type: INCR_MODE})

export const decrCreator = () =>
 ({type: DECR_MODE})

export default menuReducer;

