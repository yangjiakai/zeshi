<template>
  <v-app id="app">
    <!-- App Header  -->
    <v-toolbar color="rgb(27,27,27)" dark="">
      <v-img>
        <img src="./assets/logo-light.png" alt="" class="logo">
      </v-img>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/about"> About Us</v-btn>
        <v-btn flat to="/whyus">Why Us</v-btn>
        <v-btn flat to="/condadite">Candidates</v-btn>
        <v-btn flat>Join Us</v-btn>
        <v-btn flat to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Main  -->
    <v-content>
      <router-view />
    </v-content>
  
    <!-- App Footer  -->
    <v-footer height="auto" color="rgb(20,30,50)">
      <v-layout justify-center row wrap>
        <v-btn v-for="link in ['Home', 'About Us', 'Why Us', 'Candidates', 'Join Us', 'Contact']" :key="link" color="white" flat round>
          {{ link }}
        </v-btn>
        <v-flex grey darken-4 py-3 text-xs-center white--text xs12>
          Copyright&copy;2012 - 2019<strong>&nbsp;Shanghai Versal Consulting Co.Ltd&nbsp;</strong>  All Rights Reserved  
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {

}
</script>


<style lang="stylus" scoped>
  .logo 
    width 170px
</style>