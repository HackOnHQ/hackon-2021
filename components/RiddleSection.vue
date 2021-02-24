<template>
  <Container id="riddle">
    <section class="content-section">
      <HashHeader title="Can You Solve The Riddle ?" />
      <div class="contents">
        <iframe
          src="https://www.youtube.com/embed/4kFC7669quE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  </Container>
</template>

<script>
import Container from "~/components/Container";
import HashHeader from "~/components/HashHeader";

export default {
  components: {
    Container,
    HashHeader
  }
};
</script>

<style lang="scss" scoped>
.content-section {
  padding: 40px 0 10px;

  .contents {
    text-align: center;
    padding: 30px 20px 0;

    iframe {
      height: 30rem;
      width: 53.3rem;

      @include respond-below(md) {
        height: 23rem;
        width: 40.8rem;
      }

      @include respond-below(sm) {
        height: 20rem;
        width: 35.4rem;
      }

      @include respond-between(xs, sm) {
        height: 15rem;
        width: 26.6rem;
      }

      @include respond-below(xs) {
        height: 15rem;
        width: 26.6rem;
      }

      @include respond-between(xxs, xs) {
        height: 10rem;
        width: 17.7rem;
      }

      @include respond-below(xxs) {
        height: 8rem;
        width: 14.2rem;
      }
    }
  }
}
</style>
