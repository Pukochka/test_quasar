
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Main.vue') },
      { path: '/review', component: () => import('src/pages/Review.vue') },
      { path: '/posts', component: () => import('src/pages/Posts.vue') },
      { path: '/agree', component: () => import('src/pages/Agree.vue') },
      { path: '/contact', component: () => import('src/pages/Contact.vue') },
      { path: '/probl', component: () => import('src/pages/Probl.vue') },
      { path: '/signin', component: () => import('src/pages/SignIn.vue') },
      { path: '/register', component: () => import('src/pages/Register.vue') },
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
