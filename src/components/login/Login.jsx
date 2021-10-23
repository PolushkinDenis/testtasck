import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import './Login.css'


const Login = () => {

    const [form, setForm] = useState({
        login: '', password: ''
    })
    const [error, setError] = useState(true)
    const history = useHistory()
    const dispatch = useDispatch()
    const data = useSelector(state => state.dataLogin)

    useEffect(() => {
        if (form.login === data.login && form.password === data.password) {
            setError(false)
        }
        else (setError(true))
    });

    const authHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const loginHandler = () => {
        dispatch({ type: "SET_LOGIN", payload: form.login })
        dispatch({ type: "SET_PASSWORD", payload: form.password })
        history.push('/profile')
    }

    return (
        <div className="input">
            <input
                type="text"
                placeholder="Логин"
                name="login"
                onChange={e => authHandler(e)}
            />
            <input
                type="password"
                placeholder="Пароль"
                name="password"
                onChange={e => authHandler(e)}
            />
            <button onClick={loginHandler} disabled={error}>Войти</button>
        </div>
    )
}

export default Login;