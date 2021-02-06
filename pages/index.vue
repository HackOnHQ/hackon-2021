<template>
  <div class="home-page">
    <Hero/>
    <ContentSection/>
    <TracksSection/>
    <PrizesSection />
    <SpeakersSection/>
    <WorkshopsSection/>
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
import PrizesSection from '~/components/PrizesSection';

export default {
  components: {
    Container,
    Hero,
    ContentSection,
    TracksSection,
    SpeakersSection,
    SponsorsSection,
    SchedulesSection,
    WorkshopsSection,
    PrizesSection
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
