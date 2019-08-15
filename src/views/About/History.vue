<template>
    <div>
        <v-container style="max-width: 800px;">
            <v-timeline dense clipped>
                <v-timeline-item fill-dot class="white--text mb-5" color="info" large>
                    <template v-slot:icon>
                        <i class="material-icons">timeline</i>
                    </template>
                </v-timeline-item>
                <v-timeline-item class="mb-3" color="grey" icon-color="grey lighten-2" small v-for="item in history"
                    :key="item">
                    <v-layout justify-space-between>
                        <v-flex xs10 md5 text-xs-left>
                            <p>
                                <v-chip class="white--text ml-0" color="info" label small>
                                    {{item.year}}
                                </v-chip>
                            </p>
                            <p>{{item.event}}</p>
                        </v-flex>
                        <v-flex  v-if="windowSize.x>800" xs7 align-self-center>{{item.detile}}</v-flex>
                    </v-layout>
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'history',
        data: () => ({
            events: [],
            windowSize: {
                x: 0,
                y: 0,
            },
            input: null,
            nonce: 0,
            history: [{
                    year: '2007年',
                    event: 'VERSAL成立于上海',
                    detile: '专注于人力资源服务及解决方案'
                }, {
                    year: '2009年',
                    event: 'VERSAL顾问人数突破50人',
                    detile: '公司规模稳步扩大'
                }, {
                    year: '2011年',
                    event: 'VERSAL成立西安分公司',
                    detile: '为北京、西安等北方企业提供人资全方位业务'
                }, {
                    year: '2012-2013年',
                    event: 'VERSAL连续两年举办专场招聘活动',
                    detile: '为众多世界500强企业客户输送高端职位'
                }, {
                    year: '2014年',
                    event: '成为长三角区域制造业头部猎头服务供应商',
                    detile: '快速招募到关键职位支持人才'
                }, {
                    year: '2015年',
                    event: 'VERSAL成立北京分公司',
                    detile: '成功举办“大数据时代的HR招聘策略应对”论坛'
                }, {
                    year: '2016年',
                    event: 'VERSAL成立青岛分公司',
                    detile: '成为网易北京年度最佳人才服务供应商'
                }, {
                    year: '2017年',
                    event: '荣获上海人才服务行业协会百强',
                    detile: '人力资源行业百强'
                }, {
                    year: '2009年',
                    event: 'VERSAL顾问人数突破50人',
                    detile: '公司规模稳步扩大'
                }, {
                    year: '2018年',
                    event: '与西安人社局联合举办“十佳 HR”评选活动',
                    detile: '被授予西安&青岛地区招才引智工作站荣誉称号'
                }, {
                    year: '2019年',
                    event: '成立12周年,精耕人力资源解决方案',
                    detile: '多次获得客户给予的 Top vendor的称号'
                }

            ]
        }),

        computed: {

        },
        mounted() {
            this.onResize()
        },

        methods: {
            onResize() {
                this.windowSize = {
                    x: window.innerWidth,
                    y: window.innerHeight
                }

            },
        }
    }
</script>

<style scoped>
</style>