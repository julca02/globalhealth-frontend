import { login, profile } from '../services/getUsers';

const token = localStorage.getItem('token')
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    token: token || "",
    user: null || user,
    isLoading: false,
    LoggedIn: Boolean(token),
    errorMessage: null
};
export const Login = {
    state: initialState,
    actions: {
        async login({ commit }, user) {
            commit('login')
            try {
                const res = await login(user)

                const { token } = res.data

                localStorage.setItem("token", token)

                if (token) {
                    const user = await profile(token)
                    localStorage.setItem('user', JSON.stringify(user.data))

                    commit('loginSuccess', { token, user: user.data });

                    return user.data
                }

            } catch (error) {
                if (error.response.data) {
                    commit('loginFailure', { payload: error.response.data.message })
                }
            }

        },
        logout({ commit }) {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            commit('resetState');
        },
    },
    mutations: {
        login(state){
            state.isLoading = true
        }, 
        loginSuccess(state, payload) {
            state.LoggedIn = true;
            state.token = payload.token;
            state.user = payload.user;
            state.errorMessage = null
            state.isLoading = false
        },
        loginFailure(state, payload) {
            state.LoggedIn = false;
            state.errorMessage = payload
            state.isLoading = false
        },
        resetState(state) {
            state.LoggedIn = false;
            state.token = null;
            state.user = null;
            state.errorMessage = null
            state.isLoading = false
        },
    }
}

