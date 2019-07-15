<template>
  <div class="home">
    <Particles />
    <v-layout class="board">
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="rgba(255,255,255,.2)">
          <v-card-title>
            <span style="font-size:30px; font-weight:600; padding:0 10px; color:rgb(222,38,46)">WE</span>
            <vue-typed-js :strings="[firstText,secondText,thirdText]" class="typed" :typeSpeed="15">
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
    </v-layout>
  </div>
</template>

<script>
  import Particles from '../components/Particles'
  export default {
    data:()=>{
      return {
        firstText:'Providing Professional Recruitment Consulting Şervices_(:3」∠)_',
        secondText:'Will Create Lasting, Mutually Beneficial Partnerships_(:3」∠)_.',
        thirdText:'ARE VERSAL,WE ARE PARTNER(^O^)／'
      }
    },
    name: 'home',
    components: {
      Particles,
    }
  }
</script>

<style lang="stylus" scoped>
.board
  position absolute
  width 2000px;
  left 50%;
  margin-left:-1000px;
  top 20%;

.typed
  color :#fff
  border-bottom: 3px solid rgb(23,163,165)
</style>