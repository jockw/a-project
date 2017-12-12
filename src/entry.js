/**
 * Created by lt on 17/5/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import test1 from './component/test1';
import test2 from './component/test2';
import Element from 'element-ui';
import routetest from './router';

Vue.use(Element);
Vue.use(VueRouter);
console.log(routetest)
const routes = [
  { path: '/test1', component: test1 },
	{ path: '/test2', component: test2 }
]


const router =new VueRouter({
	routes,
})

new Vue({
  render: h => h(App),
	router,
}).$mount('#tt');
