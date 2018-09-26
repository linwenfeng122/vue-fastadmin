import Cookies from 'js-cookie'

const app = {
    state: {
        sidebar: {
         opened: !+Cookies.get('sidebarStatus'),
         withoutAnimation: false,
         isClose: false,
         router: false
      },
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
        if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', 1)
        } else {
            Cookies.set('sidebarStatus', 0)
        }
        state.sidebar.opened = !state.sidebar.opened
        state.sidebar.withoutAnimation = false
        },
        CLOSE_SUBMENU: state => {
            state.sidebar.isClose = !state.sidebar.isClose
        },
        SET_ROUTER: state => {
            state.sidebar.router = true;
        }
    },
    actions: {
       toggleSideBar({commit}) {
          commit('TOGGLE_SIDEBAR')
       },
       closeSubMenu({commit}) {
        commit('CLOSE_SUBMENU')
       },
       setRouter({commit}) {
         commit('SET_ROUTER')
       }
    }
}
export default app