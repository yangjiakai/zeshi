<template>
    <div class="back">
        <div class="mask">
            <v-container class="warp" grid-list-lg>
                <v-layout row wrap py-5>
                    <v-flex md4>
                        <h1 class="my-5">互联网行业</h1>
                        <p>技术 Technology</p>
                        <p>产品 Product </p>
                        <p>运营 operation</p>
                        <p>商务 Business</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="mask">
            <v-container class="warp" grid-list-lg>
                <v-layout row wrap py-5 justify-end>
                    <v-flex md4 text-lg-right>
                        <h1 class="my-5">全方位业务</h1>
                        <p>培训</p>
                        <p>外包</p>
                        <p>测评</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="mask">
            <v-container class="warp" grid-list-lg>
                <v-layout row wrap py-5>
                    <v-flex md4>
                        <h1 class="my-5">零售消费品</h1>
                        <p>服装 Apparel</p>
                        <p>化妆品 Cosmetics </p>
                        <p>奢侈品 Luxury</p>
                        <p>快速消费品 FMCG</p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="mask">
            <v-container class="warp" grid-list-lg justify-end>
                <v-layout row wrap py-5 justify-end>
                    <v-flex md4 text-lg-right>
                        <h1 class="my-5">制造业</h1>
                        <p>汽车及零部件 Auto Parts</p>
                        <p>机械制造 Mechanical Manufacture </p>
                        <p>工业自动化 Industrial Automation</p>
                        <p>工业科技 Industrial technology</p>
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

        width: 100%;

    }

    .mask:nth-child(1),
    .mask:nth-child(3) {
        width: 100%;
        background-color: rgba(33, 33, 33, 1);
    }

    .mask:nth-child(2),
    .mask:nth-child(4) {
        background-color: rgba(255, 255, 255, 1);
        color: #000;
    }

    .mask:nth-child(2) h1,
    .mask:nth-child(2) p,
    .mask:nth-child(4) h1,
    .mask:nth-child(4) p {
        color: #222;
    }

    .v-card {
        text-align: center;
    }

    img {
        width: 100%;
    }

    h1,
    p {
        color: #fff;
    }
</style>