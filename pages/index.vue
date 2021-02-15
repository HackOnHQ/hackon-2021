<template>
  <div class="home-page">
    <Hero />
    <ContentSection />
    <TracksSection />
    <PrizesSection />
    <SpeakersSection />
    <ScheduleSection />
    <WorkshopsSection />
    <SponsorsSection />
    <CommunityPartnersSection />
    <FAQSection />
  </div>
</template>

<script>
import Container from "~/components/Container";
import Hero from "~/components/Hero";
import ContentSection from "~/components/ContentSection";
import TracksSection from "~/components/TracksSection";
import PrizesSection from "~/components/PrizesSection";
import SpeakersSection from "~/components/SpeakersSection";
import ScheduleSection from "~/components/ScheduleSection";
import WorkshopsSection from "~/components/WorkshopsSection";
import SponsorsSection from "~/components/SponsorsSection";
import FAQSection from "~/components/FAQSection";
import CommunityPartnersSection from "~/components/CommunityPartnersSection";

export default {
  components: {
    Container,
    Hero,
    ContentSection,
    TracksSection,
    SpeakersSection,
    SponsorsSection,
    CommunityPartnersSection,
    ScheduleSection,
    WorkshopsSection,
    PrizesSection,
    FAQSection
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
