import * as React from 'react';
import { useEffect } from 'react';
import { isValidLogin } from '../api/login'
const LoginContainer = () => {
    useEffect(
        () => {
            isValidLogin({ login: 'admin', password: 'test' })
                .then(data => {
                    console.log(data);
                })
        }, []
    )
    return (
        <div>
            <h2>LoginContainer</h2>
        </div>
    )
}
export default LoginContainer;
