import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/pages/Home.vue'
import Cart from '@/pages/Cart.vue'
import Signup_Artist from '@/pages/Signup_Artist.vue'
import Signup_User from '@/pages/Signup_User.vue'
import Blog from '@/components/Blog.vue'
import Checkout from '@/pages/Checkout.vue'
import Login from '@/pages/Login.vue'
import Photography from '@/pages/Photography.vue'
import Paintings from '@/pages/Paintings.vue'
import Sculpture from '@/pages/Sculptures.vue'
import Product_Description from '@/pages/Product_Description.vue'
import Animalphotography from '@/pages/Animalphotography.vue'
import Abstractpaintings from '@/pages/Abstractpaintings.vue'
import User from '@/pages/User.vue'
import Artist from '@/pages/Artist.vue'
import Newsletter from '@/components/Newsletter.vue'
import Wishlist from '@/pages/Wishlist.vue'
import Videos from '@/components/Videos.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/cart', name: 'cart', component: Cart },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/artcollector/signup', name: 'signup_user', component: Signup_User },
    { path: '/artist/signup', name: 'signup_artist', component: Signup_Artist },
    { path: '/login', name: 'login', component: Login },
    { path: '/photography', name: 'photography', component: Photography },
    { path: '/paintings', name: 'paintings', component: Paintings },
    { path: '/sculptures', name: 'sculptures', component: Sculpture },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/product_description', name: 'product_description', component: Product_Description },
    { path: '/animal_photography', name: 'animal_photography', component: Animalphotography },
    { path: '/abstract_paintings', name: 'abstract_photography', component: Abstractpaintings },
    { path: '/user', name: 'user', component: User },
    { path: '/artists', name: 'artists', component: Artist },
    { path: '/newsletter', name: 'newsletter', component: Newsletter },
    { path: '/Videos', name: 'Videos', component: Videos },
    { path: '/Wishlist', name: 'Wishlist', component: Wishlist },
    { path: '/News', name: 'News', component: News },
    { path: '/About', name: 'About', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;