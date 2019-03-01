export default [
  { path: '/button', name: 'button', component: () => import('@/pages/button/index') },
  { path: '/icon', name: 'icon', component: () => import('@/pages/icon/index') },
  { path: '/cell', name: 'cell', component: () => import('@/pages/cell/index') },
  { path: '/checkbox', name: 'checkbox', component: () => import('@/pages/checkbox/index') },
  { path: '/collapse', name: 'collapse', component: () => import('@/pages/collapse/index') },
  { path: '/loading', name: 'loading', component: () => import('@/pages/loading/index') }

]