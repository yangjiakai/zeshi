<template>
  <v-app id="app" v-resize="onResize">
    <!-- App Header  -->
    <v-toolbar color="rgb(27,27,27)" dark="" app>
      <v-img>
        <img src="./assets/logo-light.png" alt="" class="logo">
      </v-img>
      <template v-slot:extension v-if="flag">
        <v-btn-toggle>
          <v-btn flat to="/" color="#fff">
            首页
          </v-btn>
          <v-btn flat to="/about" color="info">
            择仕简介
          </v-btn>
          <v-btn flat to="/whyus" color="info">
            选择择仕
          </v-btn>
          <v-btn flat to="/condadite" color="info">
            寻找顾问
          </v-btn>
          <v-btn flat to="/career" color="info">
            工作机会
          </v-btn>
        </v-btn-toggle>


      </template>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">首页</v-btn>
        <v-btn flat to="/about">择仕简介</v-btn>
        <v-btn flat to="/whyus">选择择仕</v-btn>
        <v-btn flat to="/condadite">寻找顾问</v-btn>
        <v-btn flat to="/career">工作机会</v-btn>
        <!-- <v-btn flat to="/contact">工作机会</v-btn> -->
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Main  -->
    <v-content>
      <router-view />
    </v-content>

    <!-- App Footer  -->
    <v-footer height="auto">
      <v-layout justify-center row wrap>
        <v-flex xs12>
          <v-card dark color="rgb(35,47,65)">
            <v-container fluid grid-list-xl class="site-map">
              <v-layout row justify-space-between wrap>
                <v-flex xs6 sm2>
                  <ul>

                    <li>择仕简介</li>
                    <li>
                      <router-link to="/about">企业情报</router-link>
                    </li>
                    <li>
                      <router-link to="/about">核心业务</router-link>
                    </li>
                    <li>
                      <router-link to="/about">历史沿革</router-link>
                    </li>
                    <li>
                      <router-link to="/about">CEO</router-link>
                    </li>
                    <li>
                      <router-link to="/about">合伙人</router-link>
                    </li>
                    <li>
                      <router-link to="/about">互联网团队</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs6 sm2>
                  <ul>
                    <li>选择择仕</li>
                    <li>
                      <router-link to="/whyus">人才储备</router-link>
                    </li>
                    <li>
                      <router-link to="/whyus">业务优势</router-link>
                    </li>
                    <li>
                      <router-link to="/whyus">发展规划</router-link>
                    </li>
                    <li>
                      <router-link to="/whyus">联系我们</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs6 sm2>
                  <ul>
                    <li>寻找顾问</li>
                    <li>
                      <router-link to="/">寻找顾问</router-link>
                    </li>
                  </ul>
                </v-flex>
                <v-flex xs6 sm2>
                  <ul>
                    <li>工作机会</li>
                    <li>
                      <router-link to="/career">工作机会</router-link>
                    </li>
                  </ul>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
        <v-flex grey darken-4 py-3 text-xs-center white--text xs12>
          Copyright&copy;2012 - 2019<strong>&nbsp;Shanghai Versal Consulting Co.Ltd&nbsp;</strong> All Rights Reserved
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        windowSize: {
          x: 0,
          y: 0,
        },
        flag: true,
        // flag:windowSize.x>800?true:false,
        items: [{
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Photos',
            subtitle: 'Jan 9, 2014'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Recipes',
            subtitle: 'Jan 17, 2014'
          },
          {
            icon: 'folder',
            iconClass: 'grey lighten-1 white--text',
            title: 'Work',
            subtitle: 'Jan 28, 2014'
          }
        ],
        items2: [{
            icon: 'assignment',
            iconClass: 'blue white--text',
            title: 'Vacation itinerary',
            subtitle: 'Jan 20, 2014'
          },
          {
            icon: 'call_to_action',
            iconClass: 'amber white--text',
            title: 'Kitchen remodel',
            subtitle: 'Jan 10, 2014'
          }
        ]
      }
    },
    methods: {
      onResize() {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        }
        this.flag = window.innerWidth > 800 ? false : true
      },
    },
    mounted() {
      this.onResize()
    }
  }
</script>


<style lang="css" scoped>
  .logo {
    width: 170px;
  }

  li {
    list-style: none;
    margin-bottom: 1em;
    color: #6aa4f8;
    font-weight: 600;
  }

  li:first-child {
    color: #fff;
    font-size: 1.2em
  }

  .site-map {
    width: 1200px;
  }

  .v-btn-toggle {
    background-color: rgba(0, 0, 0, 0);
  }

  a {
    text-decoration: none;
    color: #6aa4f8;
  }
</style>