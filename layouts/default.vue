<template>
  <div class="home-layout">
    <NavigationBar/>
    <main>
      <Nuxt />
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';
import Footer from '~/components/Footer';

export default {
  components: {
    NavigationBar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;

  main {
    flex: 1;
  }
}
</style>
