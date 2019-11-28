<template>

<div class="header">

  <client-only>

<div class="topbar">

<nav class="uk-navbar-container" uk-navbar>

<div class="uk-navbar-left">

<a class="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #offcanvas-reveal">
  <span uk-icon="icon: menu"></span>
</a>

</div>

<div class="uk-navbar-right">
<!-- // If you are logged in -->
          <ul class="uk-navbar-nav" v-if="username">
              <li><a href="#" class="uk-link-reset"><img class="uk-border-circle" width="20" height="20" v-bind:src="avatar" alt="">{{ username }}</a></li>
              <li><a href="#" @click="logout"><span uk-icon="icon: sign-out"></span>Útskrá</a></li>
          </ul>

          <!-- // If you are not logged in -->
          <ul class="uk-navbar-nav" v-else>
              <!-- <li><a href="/users/register"><span uk-icon="icon: push"></span>Nýskrá</a></li> -->
              <li><a href="/users/signin"><span uk-icon="icon: sign-in"></span>Innskrá</a></li>
          </ul>
</div><!-- .uk-navbar-right -->

</nav><!-- .uk-navbar-container -->  
        
</div><!-- .topbaar -->

<div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
    <div class="uk-offcanvas-bar" style="background:white!important;">

        <button class="uk-offcanvas-close" type="button" uk-close></button>

          <article class="uk-comment">
    <header class="uk-comment-header uk-grid-medium uk-flex-middle" uk-grid>
        <div class="uk-width-auto">
          <img class="uk-comment-avatar" v-bind:src="avatar" width="80" height="80" alt="">
        </div>
        <div class="uk-width-expand">
            <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#"><span class="user" uk-icon="icon: user"></span>{{ username }}</a></h4>
            <ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="#">{{ starf }}</a></li>
                <li><a href="#"><span class="user" uk-icon="icon: location"></span>Sundlaug Sauðárkróks</a></li>
            </ul>
        </div>
    </header>
    <div class="uk-comment-body">
        <p>Velkominn <span>{{ username }} <br>
        
        <small></small>
        </span></p>
    </div>
</article>

        <dl class="uk-description-list">
        <dt><router-link tag="a" class="navbar-brand" to="/posts/lenda" exact><span uk-icon="icon: home"></span><span>He</span>im</router-link></dt>
        <dt><router-link tag="a" class="navbar-brand" to="/posts" exact><span uk-icon="icon: plus"></span><span class="ny">Ný</span> Mæling</router-link></dt>
        <dt><router-link tag="a" class="navbar-brand" to="/posts/klor" exact><span>Mæl</span>ingar</router-link></dt>
        </dl>

    </div>
</div>

</client-only>

</div><!-- .header -->

</template>

<script>  
import { mapMutations } from 'vuex'

export default {  
  computed: {
    // Set your username thanks to your getter
    username() {
      return this.$store.getters['auth/username']
    },
    avatar() {
      return this.$store.getters['auth/avatar']
    },
    starf() {
      return this.$store.getters['auth/starf']
    },
  },
  methods: {
    // Define your needed mutations, here: auth/logout
    ...mapMutations({
      logout: 'auth/logout'
    })
  }
}
</script>  