<template>
    <div>
        <v-layout row wrap>
            <v-flex xs10>
                <v-card class="pa-3">
                    <h1>添加工作</h1>
                    <form>
                        <v-text-field label="名称" v-model="job.job_name"></v-text-field>
                        <v-text-field label="地点" v-model="job.location"></v-text-field>
                        <v-text-field label="公司" v-model="job.company"></v-text-field>
                        <h3>工作描述</h3>
                        <v-text-field label="请按回车键添加描述" v-model="temRes" @keydown.enter="addRes"></v-text-field>
                        <v-slide-y-transition class="py-0" group>
                            <p v-for="(res,resKey) in job.responsibilities" :key="resKey">
                                <v-icon class="mx-1">filter_vintage</v-icon>
                                {{res}}
                                <v-divider></v-divider>
                            </p>
                        </v-slide-y-transition>
                        <h3>技能需求</h3>
                        <v-text-field label="请按回车键添加需求" v-model="temReq" @keydown.enter="addReq"></v-text-field>
                        <v-slide-y-transition class="py-0" group>
                            <p v-for="(req,reqKey) in job.requirement" :key="reqKey">
                                <v-icon class="mx-1">flare</v-icon>{{req}}
                                <v-divider></v-divider>
                            </p>
                        </v-slide-y-transition>
        
                        <v-btn @click="onSubmit" color="success">确认添加</v-btn>
                        <v-btn color="warning">清空</v-btn>
                    </form>
                </v-card>
            </v-flex>

        </v-layout>
    </div>
</template>

<script>
    import {
        mapActions
    } from 'vuex'
    export default {
        name: "AddJob",
        data() {
            return {
                temRes: "",
                temReq: "",
                job: {
                    job_name: "",
                    location: "",
                    company: "",
                    responsibilities: [],
                    requirement: []
                }
            }
        },
        methods: {
            ...mapActions(['addJob']),

            // 添加工作描述到临时描述列表
            addRes() {
                this.job.responsibilities.push(this.temRes)
                this.temRes = ""
            },

            // 添加工作需求到临时描述列表
            addReq() {
                this.job.requirement.push(this.temReq)
                this.temReq = ""
            },
            onSubmit() {
                // 分发Action
                this.addJob(this.job)
            }
        },
    }
</script>

<style scoped>
  
</style>