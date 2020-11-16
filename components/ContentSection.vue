<template>
  <Container id="about">
    <section class="content-section">
      <HashHeader title="We're ready for 2.0!"/>
      <div class="contents">
        <p>
          HackOn is a fully-online, people-focused hackathon where young minds
          possessing a passion for solving real-life problems come together to
          build innovative solutions. Whether you are a beginner or an expert
          coder, here is the perfect chance to hone your skills and witness the
          competitive yet inclusive developer community around you!
        </p>
        <p>
          Learn new technologies, enhance your team management and presentation
          skills, and get mentored by experts- all in one place!
        </p>
        <p>
          We aim to use your skills to help battle against the issues being
          faced due to the COVID-19 pandemic.
        </p>
        <p>
          In light of the COVID-19 pandemic outbreak, your safety and well-being
          are our primary concerns. Hence, all the activities related to HackOn
          like workshops, talks, and presentations will also be conducted
          online.
        </p>
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
