<template>
    <div class="home">
      <StomakForm msg="Dobrodosli na jetru"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import StomakForm from '@/components/StomakForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'StomakView',
    components: {
        StomakForm
    },
    data(){
      return {
        stomak:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchStomak'
      
      ])
    },
    computed:{
      ...mapState([
        'stomakList'
      ])

    },
    mounted(){
      
    }
  }
  </script>
  