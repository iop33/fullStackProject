<template>
    <div class="home">
      <AlergijaForm msg="Dobrodosli na alergiju"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import AlergijaForm from '@/components/AlergijaForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'AlergijeView',
    components: {
        AlergijaForm
    },
    data(){
      return {
        alergija:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchAlergija'
      
      ])
    },
    computed:{
      ...mapState([
        'alergijaList'
      ])

    },
    mounted(){
      
    }
  }
  </script>
  