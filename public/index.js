

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      student: {
      },
      education: {
        
      },
      skill: {
      },
      capstone: {
      },
      experience: {
        
      },
    };
  },
  created: function() {
    axios.get("/student.json/").then(function(response){
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

