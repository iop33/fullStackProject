<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <b-pagination
          v-model="currentPage"
          :total-rows="stomakList.length"
          :per-page="perPage"
          aria-controls="image-table"
      ></b-pagination>
  
      <b-table class="table table-hover"
          id="image-table"
          hover
          fixed
          :items="stomakList"
          :fields="fields"
          small
          :per-page="perPage"
          :current-page="currentPage"
          @row-clicked="rowClicked"
      >
      </b-table>
      <b-pagination
          v-model="currentPage"
          :total-rows="stomakList.length"
          :per-page="perPage"
          aria-controls="image-table"
      ></b-pagination>
    </div>
  </template>
  
  <script>
  
  import {  mapMutations , mapState } from 'vuex';
  export default {
    name: 'StomakForm',
     props: {
    msg: String,
    stomak:[]
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
        'stomakList'
      ]),
      productListTable: function () {
        return this.stomakList;
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