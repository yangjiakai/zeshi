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
        <v-btn flat to="/career">Join Us</v-btn>
        <v-btn flat to="/contact">Contact</v-btn>
        
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
              <v-layout row justify-space-between>
                <v-flex xs2>
                  <ul>
                    <li>择仕简介</li>
                    <li>企业情报</li>
                    <li>核心业务</li>
                    <li>历史沿革</li>
                    <li>CEO</li>
                    <li>合伙人</li>
                    <li>互联网团队</li>
                  </ul>
                </v-flex>
                <v-flex xs2>
                  <ul>
                    <li>选择择仕</li>
                    <li>人才储备</li>
                    <li>业务优势</li>
                    <li>发展规划</li>
                    <li>联系我们</li>
                  </ul>
                </v-flex>
                <v-flex xs2>
                  <ul>
                    <li>寻找顾问</li>
                    <li>寻找顾问</li>
                  </ul>
                </v-flex>
                <v-flex xs2>
                  <ul>
                    <li>工作机会</li>
                    <li>工作机会</li>
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
    }
  }
</script>


<style lang="css" scoped>
  .logo {
    width: 170px;
  }

  li {
    list-style: none;
    margin-bottom: 1rem;
    color: #6aa4f8;
    font-weight: 600;
  }

  li:first-child {
    color: #fff;
    font-size: 1.2rem
  }

  .site-map {
    width: 1200px;
  }
</style>