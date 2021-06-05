<template>
<div>
    Movies List
      <b-table :items="required_data" :fields="table_columns">
      </b-table>
</div>
</template>

<script>
import gql from "graphql-tag"

export default {
    layout: 'dashboard',
    data()
    {
        return{
            required_data : null,
            table_columns : [],

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

        let required_data = response.data.movies
        return{required_data}
    },

    created()
    {
        this.createTableData()
    },

    methods:{
        createTableData()
        {
            let columns = Object.keys(this.required_data[0])
            this.table_columns = columns.slice(0,-1)            
        }
    }

}
</script>

<style>

</style>