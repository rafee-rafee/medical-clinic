<template>
  <div class="index">
    <v-container>
       <v-layout row wrap>
         <v-flex xs12>
           <v-carousel hide-controls>
             <v-carousel-item
             v-for="slide in slides"
             :src="slide.imageUrl"
             :key="slide.id">
             <div class="title">
               {{ slide.title}}
              </div>
             </v-carousel-item>
           </v-carousel>
        </v-flex>
       </v-layout>
     </v-container>

     <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        color="white"
        flat
        v-for="link in links"
        :key="link"
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>Md Mahmudul Hasan Rafee</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      slides: [
        {
          imageUrl: '/static/images/bg1.jpg', id: 'jfejef', title: 'BECAUSE WE CARE'
        },
        {
          imageUrl: '/static/images/bg2-1.jpg', id: 'fhgk', title: 'WHAT MAKES YOU BETTER, MAKES US BETTER'
        },
        {
          imageUrl: '/static/images/bg3-1.png', id: 'jkfgfh', title: ''
        },
        {
          imageUrl: '/static/images/img1-1.jpg', id: 'yrewyu', title: 'RIGHT THERE WITH YOU'
        }
      ],
      links: ['Home', 'Our Doctors', 'Specialist', 'Services', 'Blog', 'Contact Us']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#header .search{
  display: inline-block;
}

.top-bar {
  padding: 10px 0;
  background: #191919;
  border-bottom: 1px solid #222;
  line-height: 28px;
}

.top-number{
  color: #fff;
}

.top-number p{
  margin: 0
}

.social{
  text-align: right;
}

.social-share{
 display: inline-block;
 list-style: none;
 padding: 0;
 margin: 0;
}

ul.social-share li {
  display: inline-block;
}

ul.social-share i.fa {
  display: inline-block;
  color: #fff;
  background: #404040;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 2px;
}

ul.social-share i.fa:hover {
  background: #c52d2f;
  color: #fff;
}

.search i {
  color: #fff;
}

input.search-form{
  background: transparent;
  border: 0 none;
  width: 60px;
  padding: 0 10px;
  color: #FFF;
  -webkit-transition: all 400ms;
  -moz-transition: all 400ms;
  -ms-transition: all 400ms;
  -o-transition: all 400ms;
  transition: all 400ms;
}

input.search-form::-webkit-input-placeholder{
  color: transparent;
}

input.search-form:hover::-webkit-input-placeholder {
  color: #fff;
}

input.search-form:hover {
  width: 180px;
}

.navbar {
  border-radius: 0;
  margin-bottom: 0;
  background: #151515;
  padding: 15px 0;
  padding-bottom: 0;
}

 .navbar-nav{
  margin-top: 12px;
 }

.navbar-nav>li{
  margin-left: 35px;
  padding-bottom: 28px;
}

.navbar-inverse {
  border: none;
  font-size: 15px;
  line-height: 50px;
  color: #fff;
}

.navbar-inverse .navbar-nav > li{
  padding: 5px 12px;
  margin: 0;
  border-radius: 3px;
  color: #fff;
  line-height: 24px;
  display: inline-block;
}

.navbar-inverse .navbar-nav > li:hover{
  background-color: #c52d2f;
  color: #fff;
}

.navbar-inverse .navbar-collapse{
  border-top: 0;
  padding-bottom: 0;
}

/* making silder */
.title{
  position: absolute;
  bottom: 300px;
  font-size: 180px;
  color: rgba(0,0,0,1);
  line-height: 50px;
  font-weight: bold;
  font-style: italic;
  padding: 30px;

}

</style>
