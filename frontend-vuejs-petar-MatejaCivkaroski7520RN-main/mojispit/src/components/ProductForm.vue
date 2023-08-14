<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <b-pagination
          v-model="currentPage"
          :total-rows="productList.length"
          :per-page="perPage"
          aria-controls="image-table"
      ></b-pagination>
  
      <b-table class="table table-hover"
          id="image-table"
          hover
          fixed
          :items="productList"
          :fields="fields"
          small
          :per-page="perPage"
          :current-page="currentPage"
          @row-clicked="rowClicked"
      >
      </b-table>
      <b-pagination
          v-model="currentPage"
          :total-rows="productList.length"
          :per-page="perPage"
          aria-controls="image-table"
      ></b-pagination>
    </div>
  </template>
  
  <script>
  
  import {  mapMutations , mapState } from 'vuex';
  export default {
    name: 'ProductForm',
     props: {
    msg: String,
    products:[]
    },
    data() {
      return {
        fields: ['ime','cena'],
        items: [],
        currentPage: 1,
        perPage: 20,
      }
    },
    computed: {
      ...mapState([
        'productList'
      ]),
      productListTable: function () {
        return this.productList;
      }
    },
    methods: {
      ...mapMutations([
      ]),
      rowClicked(record) {
       
      },
    }
  }
  </script>
  
  
  <style scoped>
  #hello{
    margin-left: auto;
    margin-right: auto;
  }
  .pagination{
    justify-content: center;
  }
  </style>