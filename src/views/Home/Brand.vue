<template>
    <div>
        <v-layout row wrap align-center column justify-center height="500px" class="hope" id="holder"> 
            <div class="top-decoration"></div>
            <p class="company-name" style="font-size: 8rem;color: aliceblue">择仕中国</p>
            <div class="company-logo">VERSAL</div>
            <div class="bottom-decoration"></div>
            <vue-typed-js :strings="['让企业和个人的未来增值!']">
                <h1 class="typing my-3"></h1>
            </vue-typed-js>
        </v-layout>
    </div>
</template>

<script>
    export default {
        mounted() {
            
        },
    }
</script>


<style scoped>
    .hope {
        height: 900px;
        width: 100%;
        overflow: hidden;
        background-image: url('../../assets/images/home/cubes-2492010.jpg');
        background-size: cover;
        background-position: 50% 50%;
        background-attachment: fixed;
    }

    .company-name{
        font-weight: 900;
        text-shadow: 5px 5px 2px rgba(0, 0, 0, .5)
    }

    .top-decoration{
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-bottom: none;
        height: 5rem;
        width: 15rem;
    }

    .bottom-decoration{
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-top: none;
        height: 5rem;
        width: 15rem;
    }

    .company-logo{
        font-size: 4rem;
        color:rgba(255, 255, 255, 0.8);
    }

    .typing{
        color: aliceblue;
    }
</style>