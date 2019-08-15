<template>
  <div class="about">
    <!-- <v-layout row wrap align-center class="main-area">
      <v-flex md3 xs12 text-lg-center>
        <v-card color="rgb(10,10,10)" dark class="business-area">

          <h1>主要业务</h1>
        </v-card>
      </v-flex>
      <v-flex md3 xs12>
        <v-card class="transition-area">
        </v-card>
      </v-flex>
      <v-flex md6 xs12>
        <v-card color="rgb(224,166,31)" dark class="company-area">
          <h1>公司情报</h1>
        </v-card>
      </v-flex>
    </v-layout> -->
    <v-tabs v-model="tab" color="blue-grey darken-4" align-with-title dark centered>
      <v-tabs-slider color="yellow"></v-tabs-slider>
      <v-tab v-for="item in subMenu" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <History></History>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <CEO></CEO>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat >
          <Partner></Partner>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <Plan></Plan>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat >
          <Business></Business>
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
  import History from './About/History'
  import CEO from './About/CEO.vue'
  import Partner from './About/Partner.vue'
  import Business from './About/Business.vue'
  import Plan from './About/Plan.vue'
  export default {
    components: {
      History,
      CEO,
      Partner,
      Business,
      Plan
    },
    data() {
      return {
        tab: null,
        subMenu: [
          '历史沿革', '创始人', '合作伙伴', '发展计划', '核心业务'
        ],
      }
    }

  }
</script>

<style scoped>
  .main-area .v-card {
    border-radius: 0;
    height: 600px;
    padding: 20px;
  }

  .business-area {
    color: #565656;
  }

  .transition-area {
    background: url("../assets/images/about us/meeting.jpg") center center;
    background-size: cover;
    background-position: fixed;
  }

  .v-tab-item {
    height: 1000px;
  }
</style>