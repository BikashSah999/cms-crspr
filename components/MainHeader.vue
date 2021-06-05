<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">{{website_name[0]}}</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

            <!-- <b-nav-item-dropdown text="Lang" right> -->
            <b-dropdown-item :key="item" v-for="item in categories">
                <NuxtLink to="/" v-if="item == 'Home'">
                    {{item}}
                </NuxtLink>
                <NuxtLink to="/about" v-if="item == 'About'">
                    {{item}}
                </NuxtLink>
            </b-dropdown-item>
            <!-- </b-nav-item-dropdown> -->
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import gql from "graphql-tag"
export default {
    data()
    {
        return{
            categories : [],
            website_name : []
        }
    },

    created()
    {
        this.getCategory()
        this.getWebsiteName()
    },

    methods:
    {
        async getCategory()
        {
            let response = await this.$apollo.query({
                query: gql`query MyQuery {
                    category(order_by: {id: asc}) {
                        category_name
                    }
                }`
            });

            let required_data = response.data.category
            this.categories = required_data.map(category => category.category_name)
        },

        async getWebsiteName()
        {
            let response = await this.$apollo.query({
                query: gql`query MyQuery {
                    webiste_name(where: {status: {_eq: true}}) {
                        name
                    }
                }`
            });

            let required_data = response.data.webiste_name
            this.website_name = required_data.map(website => website.name)
        },
    }

}
</script>

<style>

</style>