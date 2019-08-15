<template>
    <div class="back">
        <div class="mask">
            <v-container class="warp" grid-list-lg>
                <h1>合作伙伴</h1>
                <v-layout row wrap align-center py-5>
                    <v-flex lg5 >
                        <img src="../../assets/images/about us/map.png" alt="">
                    </v-flex>
                    <v-flex lg6 pa-5>
                        <p style="margin-top: 50px">总部位于上海、于西安、青岛已建立分公司</p>
                        <p>未来将在北京、重庆、杭州、西安、长沙、青岛、南昌等众多省市将建立分支机构；</p>
                        <p>我们的团队均来自跨国公司相关行业的高级管理人员和技术专业人才, 拥有丰富的行业背景和技术专长</p>
                        <p>同时，我们也因为组织的高速发展而不断吸引行业里优质的人才，并不断地培养和发展精英队伍</p>
                        <p>为更多的地区和市场提供多元化的专业人力资源服务。</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>


    </div>
</template>

<script>
    export default {


    }
</script>

<style lang="css" scoped>
    .back {
        background: url('../../assets/images/home/earth-3866609.jpg');
        background-attachment: fixed;
        background-position: center center;
    }

    .warp {
        margin: 0 auto;
        width:1600px;
    }

    .mask {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
    }

    .v-card {
        text-align: center;
    }

    img {
        width: 100%;
    }

    p{
        color: #fff;
    }
</style>