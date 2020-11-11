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
  apiKey: "AIzaSyBJhwLs0fWN7V8329CX1hagcujfSuhvns4",
  authDomain: "holy-dev.firebaseapp.com",
  databaseURL: "https://holy-dev.firebaseio.com",
  projectId: "holy-dev",
  storageBucket: "holy-dev.appspot.com",
  messagingSenderId: "539286722307",
  appId: "1:539286722307:web:582a9f3bfca522c1cd7b36"
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


