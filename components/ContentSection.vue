<template>
  <Container id="about">
    <section class="content-section">
      <HashHeader title="We're ready for 2.0!"/>
      <div class="contents">
      <div class="about">
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
      <div class="stats">
        <div class="gridLayout">
        <div class="statData">
          <h4>2500+</h4>
          <p>Hackers</p>
        </div>
        <div class="statData">
          <h4>500+</h4>
          <p>Hacks</p>
        </div>
        <div class="statData">
          <h4>25+</h4>
          <p>Speakers</p>
        </div>
        <div class="statData">
          <h4>20+</h4>
          <p>Days</p>
        </div>
      </div>
      </div>
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
  padding: 40px 0 10px;
  
  .contents {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;

    @include respond-below(md) {
        grid-template-columns: repeat(1, 1fr);
    }
      
      .about {
      padding: 10px 0;

      p {
          padding-top: 20px;
      }
    }
  }

  .stats {
    text-align: center;
    justify-content: center;
    padding: 20px;

    .gridLayout {
      display: grid;
      margin-top: 15px;
      grid-template-columns: repeat(2, 180px);
      column-gap: 10px;
      row-gap: 10px;
      justify-content: center;

      @include respond-below(sm) {
        grid-template-columns: repeat(2, 150px);
    }
    }
    
    .statData {
      height: 150px;
      width: 150px;
      margin: 0;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      padding: 15px;
      background: var(--color-secondary-light);
      border-radius: 8px;

      h4 {
        font-size: 2rem;
        font-weight: bold;
        padding-bottom: 10px;
      }

      @include respond-below(sm) {
        width: 120px;
        height: 120px;
    }
    }
  }
}
</style>
