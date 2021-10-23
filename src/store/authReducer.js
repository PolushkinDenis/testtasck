const defaultState = {
    login: '',
    password: ''
}

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return { ...state, login: action.payload }
        case "SET_PASSWORD":
            return { ...state, password: action.payload }
        default:
            return state
    }
}