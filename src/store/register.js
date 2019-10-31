import axios from '../axios'
import {make} from 'vuex-pathify'


const state = {
    user : {},
}

const getters = {

}

const mutation = make.mutations(state)

const action = {
    async register (){ 
     let registers = await axios.post('/api/register',state.user)
     .then(async(r) => {
        localStorage.setItem('api_token',r.data.access_token);
        return true
     }).catch((e) => {
        return false
     });
     return registers
    }
}


export default {
    namespaced :true,
    state,
    getters,
    mutation,
    action,
}