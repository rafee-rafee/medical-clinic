// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import SocialSharing from 'vue-social-sharing'
import Index from './components/Index'
import About from './components/About'
import RequestAppointment from './components/RequestAppointment'
import ViewAllAppointments from './components/ViewAllAppointments'
import ViewDetails from './components/ViewDetails'
import Update from './components/Update'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(SocialSharing)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Index},
    {path: '/about', component: About},
    {path: '/createNew', component: RequestAppointment},
    {path: '/viewall', component: ViewAllAppointments},
    {path: '/viewDetails/:id', component: ViewDetails},
    {path: '/update/:id', component: Update}
  ]
})

Vue.config.productionTip = false
/* eslint-disable no-new */

new Vue({
  router,
  template: `
    <div id="app">
      <header id="header">



<!-- Top Bar -->

       <div class="top-bar">
         <div class="container">
           <div class="row">
             <div class="col-sm-6 col-xs-4">
               <div class="top-number"><p><i class="fa fa-phone-square"></i> +14039152450</p></div>
             </div>
             <div class="col-sm-6 col-xs-8">
               <social-sharing url="https://vuejs.org/" inline-template>
               <div class="social">
                 <ul class="social-share">
                   <li><network network="facebook"><i class="fa fa-fw fa-facebook"></i></network></li>
                   <li><network network="googleplus"><i class="fa fa-fw fa-google-plus"></i></network></li>
                   <li><network network="skype"><i class="fa fa-skype"></i></network></li>
                   <li><network network="linkedin"><i class="fa fa-fw fa-linkedin"></i></network></li>
                   <li><network network="twitter"><i class="fa fa-fw fa-twitter"></i></network></li>
                 </ul>

                 <div class="search">
                   <form role="form">
                     <input type="text" class="search-form" autocomplete="off" placeholder="Search">
                     <i class="fa fa-search"></i>
                   </form>
                 </div>  <!-- class search   -->
               </div>
               </social-sharing>


             </div> <!-- class col 6 8 -->
           </div>  <!--  class row  -->
         </div>  <!--  class container  -->
       </div>  <!--  class topbar  -->





<!-- Navigation Bar -->


       <nav class="navbar navbar-inverse" role="banner">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <h1 style="font-family: cursive"><i>PEACE MEDICAL CLINIC</i></h1>

                    <h4 style="font-family: cursive ;color: blanchedalmond"><i>Making everyday feel everyday again</i></h4>
                </div>

                <div class="collapse navbar-collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/viewall">View All Appointments</router-link></li>
                        <li><router-link to="/createNew">Request Appointment</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </header>
         <router-view></router-view>
    </div>
   `
}).$mount('#app')
