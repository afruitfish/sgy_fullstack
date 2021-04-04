import * as React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'


const Recommend = (props) => {
  const { enterLoading, setEnterLoading } = props
  console.log(enterLoading, '------------------');
  useEffect(() => {
    setTimeout(() => {
      setEnterLoading();
      console.log(props);
    }, 2000);
  })
  return (
    <div>
      Recommend
      {enterLoading ? 'enterLoading' : true}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // enterLoading:state.recommend.enterLoading
    enterLoading: state.getIn(["recommend", "enterLoading"])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setEnterLoading() {
      dispatch(actionCreators.changeEnterLoading(false))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
