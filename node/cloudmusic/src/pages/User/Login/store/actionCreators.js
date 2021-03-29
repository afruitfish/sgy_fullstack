import { CHANGE_USER_INFO, CHANGE_LOGIN_STATUS } from "./constants";
import { loginByPhoneRequest } from '../../../../api/request';
export const saveUserInfo = data => ({// 同步
    type: CHANGE_USER_INFO,
    data
})

export const saveLoginStatus = data => ({
    type: CHANGE_LOGIN_STATUS,
    data
})
//api 两个action

export const loginByPhone = (phone, password) => {
    return dispatch => {
        // dispatch(saveUserInfo)
        loginByPhoneRequest(phone, password)
            .then(res => {
                dispatch(saveLoginStatus(true));
                console.log(res.data, '++++++');
                dispatch(saveUserInfo(res));
            })
    }
}