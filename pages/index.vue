<template>
  <div class="home-page">
    <Hero/>
    <ContentSection/>
    <TracksSection/>
    <SpeakersSection/>
    <WorkshopsSection/>
    <SchedulesSection/>
    <SponsorsSection/>
  </div>
</template>

<script>
import Container from '~/components/Container';
import Hero from '~/components/Hero';
import ContentSection from '~/components/ContentSection';
import TracksSection from '~/components/TracksSection';
import SpeakersSection from '~/components/SpeakersSection';
import WorkshopsSection from '~/components/WorkshopsSection';
import SponsorsSection from '~/components/SponsorsSection';
import SchedulesSection from '~/components/SchedulesSection';

export default {
  components: {
    Container,
    Hero,
    ContentSection,
    TracksSection,
    SpeakersSection,
    SponsorsSection,
    SchedulesSection,
    WorkshopsSection
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
