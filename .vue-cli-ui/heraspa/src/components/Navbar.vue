<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="white">
      <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
      <b-navbar-brand href="/">
        <img :src="require('../assets/images/logo.png')"  style="height: 30%; width: 30%;"/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/packet">Packet Massage</router-link>
          <router-link class="nav-link" to="#">About Us</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
           <router-link class="nav-link" to="/cart">Cart
                <b-icon-bag></b-icon-bag>
                <span class="badge bg-success ml-2">0</span>
           </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>