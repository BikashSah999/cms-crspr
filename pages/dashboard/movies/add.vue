<template>
  <div>
    Add Movie
      <b-container fluid>
        <b-row class="my-1" :key="index" v-for="(type, index) in types" >
          <b-col sm="3">
            <label :for="(Object.keys(type))[0]">Enter <code>{{ (Object.keys(type))[0] }}</code>:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input :id="(Object.keys(type))[0]" :type="(Object.values(type))[0]" v-model="post_data[index]"></b-form-input>
          </b-col>
        </b-row>
      </b-container>

      <div class="button">
      <b-button variant="outline-primary" @click="saveAdd">{{ buttonfirsttext }}</b-button>
      <b-button variant="outline-primary" @click="saveExit">{{buttonsecondtext}}</b-button>
      </div>
      <div class="message" v-if="message_status">
        {{ message }}
      </div>

  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
  layout: 'dashboard',
  data()
  {
    return{
      types: [
          {name: 'text'},
          {language: 'text'},
          {rating: 'number'},
          {released_year: 'date'},
          {image: 'text'}
        ],
      
      post_data : [],
      message : null,
      message_status : false,
      buttonfirsttext : 'Save and Add',
      buttonsecondtext : 'Save and Exit'
    }
  },

  watch:
  {
    post_data()
    {
      this.message_status = false
    }
  },

  methods:{
    async saveAdd()
    {
      this.buttonfirsttext = "Saving ..."
      await this.save()
      this.buttonfirsttext = "Save and Add"
      this.message_status = true

    },

    async saveExit()
    {
      this.buttonsecondtext = "Saving ..."
      await this.save()
      this.message_status = true
      this.buttonsecondtext = "Save and Exit"
      this.$router.push('/movies')
    },

    async save()
    {
      this.success = false
      if(this.post_data.length == 5)
      {
        let response = await this.$apollo.mutate({
            mutation: gql`mutation MyMutation {
                insert_movies(objects: {image: "${this.post_data[4]}",
                                      language: "${this.post_data[1]}",
                                      name: "${this.post_data[0]}",
                                      rating: "${this.post_data[2]}",
                                      released_year: "${this.post_data[3]}"
                                      }
                              ) 
                {
                  returning {
                    name
                  }
                }
            }`
        });

        if(response.data)
        {
          this.message = "Success"
          this.post_data = []
        }
        else{
          this.message = "Error"
        }
      }

      else
      {
        this.message = "Error"
      }
    }
  }

}
</script>

<style scoped>
.button{
  margin-left: 40%;
  margin-top: 10px;
}
.message{
  margin-left: 50%;
  margin-top: 5px;
  font-size: 20px;
  color: blue;
}
</style>>

</style>