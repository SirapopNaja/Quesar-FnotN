import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify'

// import example from './module-example'
import login from './login'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins:[pathify.plugin],
    modules: {
      // example
      login
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
