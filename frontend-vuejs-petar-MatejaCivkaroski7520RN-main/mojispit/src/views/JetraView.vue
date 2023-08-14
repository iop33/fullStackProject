<template>
    <div class="home">
      <JetraForm msg="Dobrodosli na jetru"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import JetraForm from '@/components/JetraForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'JetraView',
    components: {
        JetraForm
    },
    data(){
      return {
        jetra:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchJetra'
      
      ])
    },
    computed:{
      ...mapState([
        'jetraList'
      ])

    },
    mounted(){
      
    }
  }
  </script>
  