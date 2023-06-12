import router from './router'
import store from './store'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
import { getToken, setToken, getUserInfo, removeToken } from '@/utils/auth' // get token from cookie

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login','/registe','/login/registe','/login/remine'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  // NProgress.start()
  // console.log('1')
  // set page title
  // document.title = getPageTitle(to.meta.title)
  // determine whether the user has logged in
  // setToken('asdf')
  const hasToken = 'dasf'
    // getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/index' })
      // NProgress.done()
    } else {
      next()
      // const hasGetUserInfo = store.getters.userInfo.phone
      // if (hasGetUserInfo) {
      //   next()
      // } else {
      //   try {
      //     // get user info
      //     const res = getUserInfo()
      //     if (res) {
      //       console.log(JSON.parse(res))
      //       store.dispatch('user/setUserInfo', JSON.parse(res))
      //     } else {

      //     }
      //     NProgress.done()
      //     next()
      //   } catch (error) {
      //     // remove token and go to login page to re-login
      //     // removeToken()
      //     // next(`/login`)
      //     console.log('报错', error)
      //     NProgress.done()
      //   }
      // }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login')
      // NProgress.done()
    }
  }
})
router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
