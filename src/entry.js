/**
 * Created by lt on 17/5/25.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import test1 from './component/test1';
import notfound from './component/test2';
import Element from 'element-ui';
import routetest from './router';

Vue.use(Element);
Vue.use(VueRouter);
const routes = [
  { path: '/test1', component: test1 },
	...routetest,
  { path: '/404', component: notfound },
]

console.log(routetest)

const router =new VueRouter({
	routes,
})

new Vue({
  render: h => h(App),
	router,
}).$mount('#tt');
