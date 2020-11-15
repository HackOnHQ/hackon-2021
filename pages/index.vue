<template>
  <div class="home-page">
    <Hero/>
  </div>
</template>

<script>
import Container from '~/components/Container';
import Hero from '~/components/Hero';

export default {
  components: {
    Container,
    Hero
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
