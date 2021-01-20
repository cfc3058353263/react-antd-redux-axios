import "./style.css"
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useHistory, NavLink } from 'react-router-dom';
import { get } from '../../utils/axios/axios'
const Login = () => {
    const history = useHistory()
    const login = () => {
        get('phoneLogin/login', {
            username: 'ceshi003',
            password: 'Password*8'
        }).then((data: any) => {
            localStorage['token'] = data.data.token
            history.push('/main')
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
    })
    return (
        <div>
            <Button type='primary' onClick={login}>登录页</Button>
            <NavLink to="/login" activeClassName="selected" >home</NavLink>
        </div>
    )
}
export default Login