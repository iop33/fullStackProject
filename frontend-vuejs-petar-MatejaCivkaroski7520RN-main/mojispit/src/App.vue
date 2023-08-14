<template>
  <div id="app">
    <div>
      <b-navbar toggleable="sm" type="dark" variant="success">
        <b-navbar-brand to="/">Apoteka Dzunic</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item-dropdown text="Opcije">
              <b-dropdown-item to="/prod">Svi produkti</b-dropdown-item>
              <b-dropdown-item to="/kasalj">Lekovi za kasalj</b-dropdown-item>
              <b-dropdown-item to="/alergije">Lekovi za alergije</b-dropdown-item>
              <b-dropdown-item to="/jetra">Lekovi za jetru</b-dropdown-item>
              <b-dropdown-item to="/stomak">Lekovi za stomak</b-dropdown-item>
              <b-dropdown-item to="/cajevi">Cajevi</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item to="/login">Registruj se</b-nav-item>
            <b-nav-item to="/signup">Prijavi se</b-nav-item>
            <b-nav-item to="/about">O nama</b-nav-item>
            <b-nav-item to="/contact">Kontakt</b-nav-item>
            <b-nav-item to="/locals">Apoteke</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {  mapMutations , mapState, mapActions } from 'vuex';
export default {
  name:'nameApp',
  computed:{
    ...mapState([
      'productList',
      'kasaljList',
      'alergijaList',
      'jetraList',
      'stomakList',
      'cajeviList'
    ])
  },

  methods:{
    ...mapActions([
    'fetchProducts',
    'fetchKasalj',
    'fetchAlergija',
    'fetchJetra',
    'fetchStomak',
    'fetchCajevi'
    ])
  },
  mounted(){
    this.fetchProducts();
    this.fetchKasalj();
    this.fetchAlergija();
    this.fetchJetra();
    this.fetchStomak();
    this.fetchCajevi();
  }

}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
