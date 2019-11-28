<template>  

<div class="id">

  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> Til baka</a>

  <client-only>
   
  <table class="uk-table uk-table-hover uk-table-divider" v-for="post in posts">
    <thead>
        <tr>
            <th>Ker</th>
            <th>°C</th>
            <th>Mæling</th>
            <th>Test</th>
            <th>Leiðrétt</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Laug</td>
            <td v-html="post.hitisundlaug"></td>
            <td v-html="post.malingsundlaug"></td>
            <td v-html="post.testsundlaug"></td>
            <td v-html="post.utkomasundlaug"></td>
        </tr>
        <tr>
            <td>Kaldur</td>
            <td v-html="post.hitikaldurpottur"></td>
            <td v-html="post.malingkaldurpottur"></td>
            <td v-html="post.testkaldurpottur"></td>
            <td v-html="post.utkomakaldurpottur"></td>
        </tr>
        <tr>
            <td>Heitur</td>
            <td v-html="post.hitiheiturpottur"></td>
            <td v-html="post.malingheiturpottur"></td>
            <td v-html="post.testheiturpottur"></td>
            <td v-html="post.utkomaheiturpottur"></td>
        </tr>
    </tbody>
    <caption class="date" v-html="post.created_at"></caption>
    <caption class="minnismidi" v-html="post.minnismidi"></caption>
</table>

  </client-only>

</div><!-- .id -->  

</template>

<script>  
import postQuery from '~/apollo/queries/post/post'

export default {

  data() {

    return {
      post: Object
    }
    
  },
  apollo: {
    post: {
      prefetch: true,
      query: postQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>