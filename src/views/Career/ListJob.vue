<template>
    <div>
        <v-layout row>
            <v-flex xs12 sm6>
                <v-card>
                    <v-toolbar color="dark-gray" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>

                        <v-toolbar-title>职位一览</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>search</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>check_circle</v-icon>
                        </v-btn>
                    </v-toolbar>
            
                    <v-list two-line>
                        <template v-for="job in allJobs">
                            <v-list-tile :key="job.id" avatar ripple @click="hover">
                                <v-list-tile-content>
                                    <v-list-tile-title>{{ job.job_name }}</v-list-tile-title>
                                    <v-list-tile-sub-title class="text--primary">{{ job.company }}
                                    </v-list-tile-sub-title>
                                    <v-list-tile-sub-title>{{ job.location}}</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <v-list-tile-action-text>2月5日</v-list-tile-action-text>
                                    <v-icon>
                                        star
                                    </v-icon>
                                </v-list-tile-action>
                            </v-list-tile>
                            <v-divider v-if="index + 1 < allJobs.length" :key="index"></v-divider>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {
        
            }
        },
        methods: {
            ...mapActions(["fetchJobs"]),
            hover(){}
        },
        computed: {
            ...mapGetters(["allJobs"])
        },
        created() {
            this.fetchJobs()
        }

    }
</script>