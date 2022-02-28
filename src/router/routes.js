
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/main', component: () => import('src/pages/Main.vue') },
      { path: '/review', component: () => import('src/pages/Review.vue') },
      { path: '/posts', component: () => import('src/pages/Posts.vue') },
      
      { path: '/contact', component: () => import('src/pages/Contact.vue') },
      { path: '/', component: () => import('src/pages/Probl.vue') },
      { path: '/all', component: () => import('src/pages/allCategory.vue') },
      
      
      { path: '/mypay', component: () => import('src/pages/Mypay.vue') },
      { path: '/trello', component: () => import('src/pages/trello.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
