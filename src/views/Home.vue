<template>
  <div class="home">
    <!-- <v-layout class="board">
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="rgba(255,255,255,.2)">
          <v-card-title>
            <span style="font-size:30px; font-weight:600; padding:0 10px; color:rgb(222,38,46)">WE</span>
            <vue-typed-js :strings="[firstText]" class="typed" :typeSpeed="15">
              <h1 class="typing"></h1>
            </vue-typed-js>
          </v-card-title>
          <v-card-actions>
            <span></span>
            <v-spacer></v-spacer>
            <v-btn flat color="rgb(23,163,165)">GET START</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout> -->

    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-2 font-weight-thin mb-3">择仕中国</h1>
        <h4 class="subheading">让企业和个人的未来增值!</h4>
      </v-layout>
    </v-parallax>
    <div class="test">
    
    </div>

    <v-container fluid grid-list-xl class="partner">
      <h1>合作伙伴</h1>
      <v-layout row justify-space-between>
        <v-flex xs2 v-for="i in 6" :key='i'>
          <img src="../assets/images/home/bilibili.png" alt="">
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="secondary">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-center>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="secondary">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row justify-space-between>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="primary">
            <v-card-text>one</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="secondary">
            <v-card-text>two</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs2>
          <v-card dark color="accent">
            <v-card-text>three</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        firstText: '择仕中国：让企业和个人的未来增值_(:3」∠)_'
        // secondText:'Will Create Lasting, Mutually Beneficial Partnerships_(:3」∠)_.',
        // thirdText:'ARE VERSAL,WE ARE PARTNER(^O^)／'
      }
    },
    name: 'home',
  }
</script>

<style lang="css" scoped>
  .board {
    position: absolute;
    width: 2000px;
    left: 50%;
    margin-left: -1000px;
    top: 20%;
  }


  .typed {
    color: #fff;
    border-bottom: 3px solid rgb(23, 163, 165);

  }

  .partner {
    width: 1200px;
  }

  .partner h1 {
    padding: 3rem;
    font-size: 3rem;
    text-align: center;
    color: rgb(35, 47, 65)
  }

  .v-parallax h1{
    font-weight: 900;
    text-shadow:  3px 3px 3px #000
  }

  .test{
    width: 100%;
    height: 600px;
  }
</style>