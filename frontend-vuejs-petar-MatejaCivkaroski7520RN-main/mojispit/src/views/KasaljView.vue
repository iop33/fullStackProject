<template>
    <div class="home">
      <KasaljForm msg="Dobrodosli na kaslju"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import KasaljForm from '@/components/KasaljForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'KasaljView',
    components: {
        KasaljForm
    },
    data(){
      return {
        kasalj:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchKasalj'
      
      ])
    },
    computed:{
      ...mapState([
        'kasaljList'
      ])

    },
    mounted(){
      
    }
  }
  </script>
  