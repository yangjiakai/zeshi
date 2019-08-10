<template>
    <div>
        {{posts}}
        <v-btn color="success" @click="insert">insert</v-btn>
        <v-btn color="error" @click="deletea('5')">delete</v-btn>
        {{mes}}
        <!-- <v-list two-line>
            <template v-for="post in posts">
                <v-list-tile avatar  :key="post.id">
                    <v-list-tile-avatar>
                        <span>A</span>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>{{post.title}}</v-list-tile-title>
                        <v-list-tile-sub-title>{{post.author}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>

        </v-list> -->
    </div>
</template>

<script>
    const axios = require('axios')
    export default {

        data() {
            return {
                name: '555',
                posts: [],
                mes:{}
            }
        },
        created() {
            this.$store.dispatch('getPosts')
        },
        computed: {
            // posts: () => {
            //     return this.$store.state.posts
            // }
        },
        mounted() {
            axios.get("http://localhost:3000/posts")
                .then((res) => {
                    this.posts = res.data
                })
        },
        methods: {
            insert() {
                axios.post("http://localhost:3000/posts/",{
                    title: 'new-server',
                    author: 'yjk'
                }).then(res => ( this.posts = [res.data,...this.posts]))
            },
            deletea(id){
                axios.delete(`http://localhost:3000/posts/${id}`)
                .then(res=>(this.posts = this.posts.filter(post=>post.id!=id)))
            }
        },

    }
</script>