<template>
<div>
  <div  :key="index" v-for="(item, index) in card_data">
    <Card class="card" :data="item" />
  </div>
</div>
</template>

<script>
import gql from "graphql-tag"

export default {
  data()
  {
    return{
      card_data : []
    }
  },

  async asyncData({app})
  {
    let response = await app.apolloProvider.defaultClient.query({
        query: gql`query MyQuery {
            movies(order_by: {id: desc}) {
                name
                language
                rating
                released_year
                image
            }
        }`
    });

    let card_data = response.data.movies
    return{card_data}
  },
}
</script>

<style>
.card{
  margin: 1.5%;
  width: 23%;
  float: left;
}
</style>