import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import firebase from 'firebase/app'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDldyXI9Rjicto4apqDb3BOLcThtpWYR4g",
  authDomain: "testproject-43f9b.firebaseapp.com",
  databaseURL: "https://testproject-43f9b.firebaseio.com",
  projectId: "testproject-43f9b",
  storageBucket: "testproject-43f9b.appspot.com",
  messagingSenderId: "736881463995",
  appId: "1:736881463995:web:768bf9278925ed6adf8f9e",
  measurementId: "G-DMNJRWJGLV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.default.auth().onAuthStateChanged(user => {
  console.log(user);
  
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


