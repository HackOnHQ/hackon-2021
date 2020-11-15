<template>
  <div class="home-layout">
    <NavigationBar/>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import NavigationBar from '~/components/NavigationBar';

export default {
  components: {
    NavigationBar,
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
