<template>
    <div class="back">
        <v-layout row wrap align-center class="warp">
            <v-flex xs12 md4 >
                <div class="avatar-container">
                </div>
            </v-flex>
            <v-flex xs8 md4 offset-sm0 offset-md2>
                <div class="describe">
                    <p> 择仕中国创始人兼首席执行官，中国人才交流市场化首批从业者；22年人力资源行业从业经验,
                        夏乾衡先生带领择仕中国经12年发展共为500余家中外知名公司提供了上千名高端管理和专业人才，
                        在人力资源服务领域获得了极好的市场商誉和客户口碑。</p>
                    <v-divider class="my-3"></v-divider>
                    <p> 如今，中国许多创新企业所面临的人才挑战。也需要更专业的人才服务，十二年行业沉淀，
                        夏乾衡先生将带领择仕中国将秉承着“让企业和个人未来增值”这一使命。
                        以高效、专业、创新的服务能力将为中国人才服务市场注入最重要的一股力量 </p>
                </div>
            </v-flex>
        </v-layout>
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
        width: 1200px;
        height: 1000px;

    }

    .avatar-container {
        border-radius: 5px;
        width: 500px;
        height: 500px;
        background-color: rgba(0, 112, 192, 0.3);
        background-image: url('../../assets/images/about us/CEO.png');
        background-clip: content-box;
        background-size: cover;
        border: 2px solid rgba(0, 112, 192, 0.5);

        padding: 20px;
    }

    .describe{
    
        max-width: 800px;
        font-size: 1.3rem;
        padding: 2rem;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);
        color: aliceblue;
        background-color: rgba(0, 0, 0,.5);
    }
</style>