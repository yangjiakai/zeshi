<template>
    <div>
        <v-container grid-list-xs>
            <ListJob></ListJob>

            <v-layout row wrap class="my-3">
                <v-flex xs9 v-for="job in allJobs" :key="job.id" my-2>
                    <v-card class="pa-3">
                        <h1>{{job.job_name}}</h1>
                        <v-chip color="indigo" text-color="white">
                            <v-avatar>
                                <v-icon>supervised_user_circle</v-icon>
                            </v-avatar>
                            {{job.company}}
                        </v-chip>
                        <v-chip color="primary" text-color="white">
                            <v-avatar>
                                <v-icon>location_on</v-icon>
                            </v-avatar>
                            {{job.location}}
                        </v-chip>
                        <v-divider class="ma-2">></v-divider>
                        <ul>
                            <h5>工作描述</h5>
                            <li v-for="(res,reskey) in job.responsibilities" :key="reskey">
                                <v-icon class="px-1">flip_to_back</v-icon>{{res}}
                            </li>
                        </ul>
                        <v-divider class="ma-2"></v-divider>
                        <ul>
                            <h5>技能需求</h5>
                            <li v-for="(req,requreKey) in job.requirement" :key="requreKey">
                                <v-icon class="px-1">turned_in</v-icon>{{req}}
                            </li>
                        </ul>
                    </v-card>
                </v-flex>
            </v-layout>
            <AddJob></AddJob>
        </v-container>
    </div>
</template>

<script>
    // const axios = require('axios')
    import AddJob from './AddJob'
    import ListJob from './ListJob'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters(["allJobs"])
        },
        methods: {
            ...mapActions(["fetchJobs"])
        },
        created() {
            this.fetchJobs()
        },
        components: {
            AddJob,
            ListJob
        }


    }
</script>


<style lang="css">
    li {
        list-style: none;
    }
</style>