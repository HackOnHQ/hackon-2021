<template>
  <div class="judges-and-mentors-page">
    <SpeakersSection />
  </div>
</template>

<script>
import SpeakersSection from "~/components/JudgesAndMentorsSection";

export default {
  components: {
    SpeakersSection,
  }
};
</script>

<style lang="scss" scoped>
.team-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
