import axios from '../axios'
import {make} from 'vuex-pathify'


const state = {
    user : {},
}

const getters = {

}

const mutation = make.mutations(state)

const action = {
    async login (){ 
     let logins = await axios.post('/api/login',state.user)
     .then(async(r) => {
        localStorage.setItem('api_token',r.data.access_token);
        return true
     }).catch((e) => {
        return false
     });
     return logins
    }
}


export default {
    namespaced :true,
    state,
    getters,
    mutation,
    action,
}