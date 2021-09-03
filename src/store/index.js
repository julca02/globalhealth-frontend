import { createStore } from "vuex";
import { User } from './User';


const store = createStore({
    modules: {
        User
    }
})

export default store