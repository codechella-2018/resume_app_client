

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      student: {},
     
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/students/1").then(function(response){
          this.student = response.data;
          console.log(this.student);
        }.bind(this));
  },
  methods: {
  },
  computed: {}
};

var router = new VueRouter({
  routes: [{ path: "/", component: HomePage }],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

