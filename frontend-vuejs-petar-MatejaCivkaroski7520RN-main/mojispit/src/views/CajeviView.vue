<template>
    <div class="home">
      <CajeviForm msg="Dobrodosli na cajeve"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import CajeviForm from '@/components/CajeviForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'CajeviView',
    components: {
        CajeviForm
    },
    data(){
      return {
        cajevi:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchCajevi'
      
      ])
    },
    computed:{
      ...mapState([
        'cajeviList'
      ])

    },
    mounted(){
      
    }
  }
  </script>
  