import { connect } from 'react-redux'
import Home from "../components/Home";
import { updateTime } from "../actions/clock";

const mapStateToProps = state => {
    return {  
      time: state.app.time
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateTime: ()=> dispatch(updateTime())
    }
  }
  
  const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
  
  export default HomeContainer