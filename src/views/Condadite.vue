<template>
    <div class="condadite">
        <v-jumbotron gradient="to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)" dark
            src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <v-container fill-height>
                <v-layout align-center>
                    <v-flex>
                        <h3 class="display-3">Submit Resume</h3>
                        <v-divider class="my-3"></v-divider>
                        <span class="subheading">Since 2007, Versal Consulting grows to be one of the largest search
                        </span>


                        <v-divider class="my-3"></v-divider>

                        <div class="title mb-3">To be continued!</div>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-jumbotron>
        <v-container>
            <v-card flat>
                <v-snackbar v-model="snackbar" absolute top right color="success">
                    <span>Registration successful!</span>
                    <v-icon dark>check_circle</v-icon>
                </v-snackbar>
                <v-form ref="form" @submit.prevent="submit">
                    <v-container grid-list-xl fluid>
                        <v-layout wrap>
                            <v-flex xs12 sm6>
                                <v-text-field v-model="form.first" :rules="rules.name" color="purple darken-2"
                                    label="Name CHN " required></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-text-field v-model="form.last" :rules="rules.name" color="blue darken-2"
                                    label="Name ENG" required></v-text-field>
                            </v-flex>
                           <v-flex xs12 sm6>
                                <v-radio-group row>
                                    <v-radio label="男" value="man"></v-radio>
                                    <v-radio label="女" value="woman"></v-radio>
                                </v-radio-group>
                            </v-flex>
                            <v-flex xs12 sm6>
                                <v-slider v-model="form.age" :rules="rules.age" color="orange" label="Age"
                                    hint="Your Age" min="1" max="100" thumb-label></v-slider>
                            </v-flex>                            
                            <v-flex xs12 sm6>
                                <v-text-field  label="Address 目前所在地址"></v-text-field>
                            </v-flex>   
                            <v-flex xs12 sm6>
                                <v-select v-model="form.disireLocation" :items="desireLocations"
                                 label="Desired Location 期望工作地点" ></v-select>
                            </v-flex>
                        
                            <v-flex xs12 sm4>
                                <v-text-field  label="Mobile 手机"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm4>
                                <v-text-field  label="Email 电子邮件"></v-text-field>
                            </v-flex>                            
                            <v-flex xs12 sm4>
                                <v-text-field  label="Other Contact 其他联系方式"></v-text-field>
                            </v-flex>                                                                                                                               
                            
                            
                            <v-flex xs12 sm6>
                                <v-textarea
                                    name="education"
                                    label="Education Backgroud 教育经历"
                                    hint="请填写您的教育经历"
                                    solo
                                    ></v-textarea>
                            </v-flex> 
                            <v-flex xs12 sm6>
                                <v-textarea
                                    name="training"
                                    label="Training Experience 培训经历"
                                    hint="请填写您的培训经历"
                                    solo
                                    ></v-textarea>
                            </v-flex> 
                            <v-flex xs12 sm6>
                                <v-textarea
                                    name="project"
                                    label="Project Experience 项目经历"
                                    hint="请填写您的项目经历"
                                    solo
                                    ></v-textarea>
                            </v-flex> 
                            <v-flex xs12 sm6>
                                <v-textarea
                                    name="certificate"
                                    label="Certificate & Prize 证书和荣誉"
                                    hint="请填写您的证书和荣誉"
                                    solo
                                    ></v-textarea>
                            </v-flex>                                                                                   
                            <v-flex xs12>
                                <v-textarea
                                    name="evaluation"
                                    label="Evaluation 自我评价"
                                    hint="请填写您的自我评价"
                                    solo
                                    ></v-textarea>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-card-actions>
                        <v-btn flat @click="resetForm">重新填写</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" type="submit">完成提交</v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    data () {
      const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false
      })

      return {
        form: Object.assign({}, defaultForm),
        rules: {
          age: [
            val => val < 65 || `I don't need you!`
          ],
          animal: [val => (val || '').length > 0 || 'This field is required'],
          name: [val => (val || '').length > 0 || 'This field is required']
        },
        animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
        desireLocations:['上海','西安','重庆','广州'],
        conditions: false,
    
        snackbar: false,
        terms: false,
        defaultForm
      }
    },

    computed: {
      formIsValid () {
        return (
          this.form.first &&
          this.form.last &&
          this.form.favoriteAnimal &&
          this.form.terms
        )
      }
    },

    methods: {
      resetForm () {
        this.form = Object.assign({}, this.defaultForm)
        this.$refs.form.reset()
      },
      submit () {
        this.snackbar = true
        this.resetForm()
      }
    }
  }
</script>