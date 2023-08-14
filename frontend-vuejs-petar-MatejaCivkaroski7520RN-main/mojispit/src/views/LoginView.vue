<template>
    <div class="home">
      <LoginForm msg="Dobrodosli na registraciji"/>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import LoginForm from '@/components/LoginForm.vue'
  
  export default {
    name: 'LoginView',
    components: {
        LoginForm
    }
  }
  </script>
  