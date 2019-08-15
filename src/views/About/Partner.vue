<template>
    <div class="back">
        <v-container class="warp">
            <h1>合作伙伴</h1>
            <v-layout row wrap align-center>
                <v-flex xs12 md6 lg3>
                    <v-card color="rgba(0,0,0,0)" flat>
                        
                        <img src="../../assets/images/about us/Partner1.png" alt="">
                    </v-card>
                </v-flex>
                <v-flex xs12 md6 lg3>
                    <v-card color="rgba(0,0,0,0)" flat>
                        <img src="../../assets/images/about us/Partner2.png" alt="">
                    </v-card>
                </v-flex>
                <v-flex xs12 md6 lg3>
                    <v-card color="rgba(0,0,0,0)" flat>
                        <img src="../../assets/images/about us/Partner3.png" alt="">
                    </v-card>
                </v-flex>
                <v-flex xs12 md6 lg3>
                    <v-card color="rgba(0,0,0,0)" flat>
                        <img src="../../assets/images/about us/Partner4.png" alt="">
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

    </div>
</template>

<script>
    export default {


    }
</script>

<style lang="css" scoped>
    .back {
        background: url('../../assets/images/home/fractal-1391295.jpg');
        background-attachment: fixed;
        background-position: center center;
    }

    .warp {
        margin: 0 auto;
        background-color: rgba(0, 0, 0, .8);
    }

    .v-card{
        text-align: center;
    }

    img{
        width: 300px;
    }
</style>