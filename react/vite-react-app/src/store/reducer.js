//首页 singers 排行榜 
import { combineReducers } from 'redux'
import { reducer as recommendReducer} from '../pages/Recommend/store'

export default combineReducers({
    recommend:recommendReducer
})