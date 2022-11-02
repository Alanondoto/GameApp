import {playCreator, incrCreator, decrCreator} from "../redux/menuReducer";
import MainMenu from './MainMenu'
import {connect} from "react-redux";

let mapStateToProps = (state) => {  
  return {
    menuPage: state.menuPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    play: (numberItemsBody, numberCountBody) => {
      dispatch(playCreator(numberItemsBody, numberCountBody));
    },
    incr: () => {
        dispatch(incrCreator())
    },
    decr: () => {
        dispatch(decrCreator())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);
