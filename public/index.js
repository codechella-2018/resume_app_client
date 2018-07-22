

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      student: {
        first_name: "John",
        last_name: "Doe",
        email: "jdoe@gmail.com",
        phone_number: "123.456.7880",
        short_bio: "blah blah",
        linkedin_url: "https://linkedin.com",
        twitter_handle: "https://twitter.com",
        personal_blog_website_url: "http://medium.com/jdoe",
        online_resume_url: "https://johndoe.com",
        github_url: "https://github.com/jdoe",
        photo: "http://quotesnsmiles.com/wp-content/uploads/2013/07/1.a-drop-of-kindness-picture-quotes.jpg"
      },
      education: {
        start_date: "5/1/2001",
        end_date: "8/1/2005",
        degree: "Bachelor of Science",
        university_name: "University of Growth Mentality",
        details: "this is details"
      },
      skill: {
        name: "css, html, javascript"
      },
      capstone: {
        name: "Capstone name",
        description: "this is my capstone",
        url: "capstone url",
        screenshot: "https://www.blakespectrum.org/wp-content/uploads/2015/10/Coding-Screenshot.jpg"

      }
    };
  },
  created: function() {},
  methods: {},
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

