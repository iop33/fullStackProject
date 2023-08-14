<template>
    <div class="home">
      <SignupForm msg="Dobrodosli na pravljenju profila"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import SignupForm from '@/components/SignupForm.vue'
  
  export default {
    name: 'SignupView',
    components: {
        SignupForm
    }
  }
  </script>
  