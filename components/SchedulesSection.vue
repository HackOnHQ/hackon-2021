<template>
  <Container id="schedule">
    <section class="content-section">
      <HashHeader title="Schedule" />
      <div class="contents"></div>
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
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  .contents {
    padding: 10px 0;

    p {
      padding-top: 20px;
    }
  }
}
</style>
