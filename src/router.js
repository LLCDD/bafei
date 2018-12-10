import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from './util/token'

Vue.use(Router)

let router = new Router({
  // redirect重定向
  // meta 可以在页面中用$route.meta来获取里面的数据
  routes: [
    { path: '', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './components/login/login'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 找回密码
      path: "/retrieve/:name",
      name: "retrieve",
      component: () =>
        import(/* webpackChunkName: "login" */ './components/retrieve/retrieve'),
      meta: {
        requiresAuth: false
      }
    },

    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "register" */ './components/register/register'),
      meta: {
        requiresAuth: false
      }
    },

    {
      // 交易大厅的路由
      path: '/theraise/:name',
      name: 'theraise',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/theraise/theraise'),
      meta: {
        requiresAuth: false
      },
      children: [{
        path: '', redirect: 'mai'
      }, {
        path: "mai",
        name: "mai",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/ziluyou/mai'),
        meta: {
          requiresAuth: false
        }
      }, {
        path: "chu",
        name: "chu",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/ziluyou/chu'),
        meta: {
          requiresAuth: false
        }
      }, {
        path: "dingdan",
        name: "dingdan",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/ziluyou/dangqian'),
        meta: {
          requiresAuth: false
        }
      }, {
        path: "old",
        name: "old",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/ziluyou/old'),
        meta: {
          requiresAuth: false
        }
      }, {
        path: "zhong",
        name: "zhong",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/ziluyou/zhong'),
        meta: {
          requiresAuth: false
        }
      }]
    },
    {
      // 首页的路由
      path: '/index',
      name: 'index',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/index/index'),
      meta: {
        requiresAuth: false
      }
    },
    {
      // 矿机商城
      path: "/shop/:name",
      name: "shop",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/shop/shop'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/market/:name",
      name: "market",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/market/market'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页底部的详情
      path: "/details/:id",
      name: "details",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/details/details'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页我的矿机
      path: "/mill/:name",
      name: "mill",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/mill/mill'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 首页矿机的详情
      path: "/milldetails",
      name: "milldetails",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/milldetails/milldetails'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 点击分享
      path: "/card/:name",
      name: 'card',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/card/card'),
      meta: {
        requiresAuth: false
      }
    }, {
      // 点击分享
      path: "/code/:name",
      name: 'code',
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/code/code'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/mall/:name",
      naem: "mall",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/mall/mall'),
      meta: {
        requiresAuth: false
      }
    }, {
      path: "/zhifu/:name",
      naem: "zhifu",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/zhifu/zhifu'),
      meta: {
        requiresAuth: false
      }
    }, {
      path: "/ka",
      naem: "ka",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/ka/ka'),
      meta: {
        requiresAuth: false
      }
    }, {
      path: "/center/:name",
      naem: "center",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/center/center'),
      meta: {
        requiresAuth: false
      }
    }, {
      path: "/xg/:name",
      naem: "xg",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/xg/xg'),
      meta: {
        requiresAuth: false
      }
    }, {
      path: "/zhifu1/:name",
      naem: "zhifu",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/zhifu1/zhufu1'),
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/trading/:name",
      naem: "trading",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/trading/trading'),
      meta: {
        requiresAuth: false
      },
      children: [{
        path: '', redirect: 'quanbu'
      }, {
        path: "quanbu",
        name: "quanbu",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/trading/quanbu'),
        meta: {
          requiresAuth: false
        },
      }, {
        path: "zhuanqu",
        name: "zhuanqu",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/trading/zhuanqu'),
        meta: {
          requiresAuth: false
        },
      }, {
        path: "zhichu",
        name: "zhichu",
        component: () =>
          import(/* webpackChunkName: "theraise" */ './components/trading/zhichu'),
        meta: {
          requiresAuth: false
        },
      }]
    }, {
      path: "/zhuan/:name",
      name: "zhuan",
      component: () =>
        import(/* webpackChunkName: "theraise" */ './components/zhuan/zhuan'),
      meta: {
        requiresAuth: false
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (!getToken()) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    console.log(to.matched)
    next()
  }
})

export default router
