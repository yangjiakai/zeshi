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
    <Brand></Brand>
    <v-layout row wrap pa-5 justify-center style="background: linear-gradient(90deg,#eef2f3,#eef2f3)"> 
        <v-card class="about" color="rgba(0,0,0,0)" flat>
            <h1>关于我们</h1>
            <v-card-text style="font-size:2rem">择仕中国10余年来稳健、快速发展，拥有超过100名资深顾问，积累了丰富的人力资源行业经验及客户资源。 </v-card-text>
            <v-card-actions class="pa-5">
              <v-spacer></v-spacer>
              <v-btn text to="/about">了解更多</v-btn>
            </v-card-actions>
          </v-card>
    </v-layout>
    <v-layout row wrap pa-5 justify-center class="worth"> 
        <v-card class="about" color="rgba(0,0,0,0)" flat>
            <h1 style="color: aliceblue">高效！专业！创新</h1>
            <v-card-actions class="pa-5">
              <v-spacer></v-spacer>
              <v-btn flat dark to="/about">了解我们</v-btn>
            </v-card-actions>
          </v-card>
    </v-layout>
    
    <LogoArea></LogoArea>
  </div>
</template>

<script>
import LogoArea from './LogoArea'
import Brand from './Brand'
  export default {
    data: () => {
      return {
        firstText: '择仕中国：让企业和个人的未来增值_(:3」∠)_'
        // secondText:'Will Create Lasting, Mutually Beneficial Partnerships_(:3」∠)_.',
        // thirdText:'ARE VERSAL,WE ARE PARTNER(^O^)／'
      }
    },
    name: 'home',
    components:{
      LogoArea,
      Brand
    }
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

  .about {
    width: 1200px;
  }

  .about h1 {
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

  .worth{
    background: url('../../assets/images/home/cyber-3400789.jpg');
    background-attachment: fixed;

  }

</style>