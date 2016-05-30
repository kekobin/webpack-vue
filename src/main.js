require('assets/sass/common.scss');

import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import filters from './filters';
import APP from "./main.vue";
import { configRouter } from './route-config'
import util from './util';

Vue.use(VueRouter);
Vue.use(VueResource);

//create router
const router = new VueRouter({
	history: false
});

configRouter(router);
// Vue.http.headers['Cache-Control'] = 'no-cache';

//init statistics logic
util.stat();

// instantiate filter of VUE
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// boostrap the app
const App = Vue.extend(require('./main.vue'));
router.start(APP, "#app");

//handle http interceptors
// Vue.http.interceptors.push(function () {
//     return {
//         request: function (request) {
//         	console.log('---this is http request----');
//         	console.log(request);
//             return request;
//         },
//         response: function (response) {
//             return response;
//         }
//     };
// });
