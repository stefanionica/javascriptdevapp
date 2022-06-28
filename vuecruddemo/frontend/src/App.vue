<template>
  <div id="app">
    <NavBar />
    <div class="container mt-3">
      <router-view />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
export default {
  name: "app",
  components: {
    Footer,
    NavBar
  },
};
</script>
