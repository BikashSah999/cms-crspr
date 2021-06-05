<template>
   <b-card
    :title="data.name"
    :img-src="data.image"
    :img-alt="data.name"
    img-height="300"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
        <ul>
            <li>Released Year: {{data.released_year}}</li>
            <li>Language: {{data.language}}</li>
            <li>Rating: {{data.rating}}</li>
        </ul>      
    </b-card-text>

  </b-card>
</template>

<script>
export default {
    props: [
    'data'
  ]

}
</script>

<style>

</style>