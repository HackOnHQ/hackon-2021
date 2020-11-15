<template>
  <div class="home-page-hero">
    <Container>
      <div class="texts">
        <h1 class="hero-text">Let's Build Big!</h1>
        <h1 class="hero-text">Pan-India Virtual Hackathon</h1>
        <h2 class="powered-by">Powered by <a href="https://github.com" target="_blank" ref="noopener noreferrer">GitHub</a></h2>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from "~/components/Container";

export default {
  components: {
    Container
  }
};
</script>

<style lang="scss" scoped>
.home-page-hero {
  height: 600px;
  max-height: 800px;
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .texts {
      display: flex;
      flex-direction: column;

      h1.hero-text {
          font-size: 2.5rem;
          font-weight: bold;
          font-family: var(--title-font);
      }

      .powered-by {
          margin-top: 15px;
          font-size: 1rem;

          a {
              color: var(--font-color);
          }
      }
  }
}
</style>
