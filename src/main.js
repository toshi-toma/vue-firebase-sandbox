import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase";
// Required for side-effects
import "firebase/firestore";

const firebaseConfig = {
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

db.collection("users").add({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
db.collection("users").doc("LA").set({
  first: "Ada",
  last: "Lovelace",
  born: 1815
})
.then(function() {
  console.log("Document successfully written!");
})
.catch(function(error) {
  console.error("Error writing document: ", error);
});

db.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  });
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
