<template>
  <div>
      {{about_us}}
  </div>
</template>

<script>
import gql from "graphql-tag"

export default {
    data()
    {
        return{
            about_us : null
        }
    },

    async asyncData({app})
    {
        let response = await app.apolloProvider.defaultClient.query({
            query: gql`query MyQuery {
                about(where: {status: {_eq: true}}, order_by: {id: desc}) {
                    about_us
                }
            }`
        });

        let about_us = response.data.about
        about_us = about_us[0].about_us
        return{about_us}
    },
}
</script>

<style>

</style>