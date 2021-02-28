<template>
  <div class="home">
    <Navbar />
    <Hero />
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero
  }
  
}
</script>
