import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../application/recommend/store'
export default combineReducers({
    // 之后开发具体功能模块的时候添加reducer
    recommend: recommendReducer
});
