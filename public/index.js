

/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      student: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        short_bio: "",
        linkedin_url: "",
        twitter_handle: "",
        personal_blog_website_url: "",
        online_resume_url: "",
        github_url: "",
        photo: ""
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

      },
      experience: {
        start_date: "1/1/2010",
        end_date: "1/1/2017",
        job_title: "engineer",
        company_name: "aceme",
        details: "JS, CSS, HTML, Bootstrap"
      },
    };
  },
  created: function() {
    axios.get("/student.json").then(function(response){
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

