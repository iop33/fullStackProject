<template>
    <div class="home">
      <ProductForm msg="Produkti" :products="product"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import ProductForm from '@/components/ProductForm.vue'
  import {  mapMutations , mapState, mapActions } from 'vuex';

  export default {
    name: 'ProductView',
    components: {
        ProductForm
    },
    data(){
      return {
        product:[]
      }
    },
    methods:{
      ...mapActions([
        'fetchProducts',
        'getProduct'
      ])
    },
    computed:{
      ...mapState([
        'productList'
      ])

    },
    mounted(){
      this.getProduct().then(res=>{
        this.product=res
        console.log(JSON.stringify(res))
      })
    }
  }
  </script>
  