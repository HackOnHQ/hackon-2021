<template>
  <div class="team-page">
    <Team2021 />
    <Team2020 />
  </div>
</template>

<script>
import Team2021 from "~/components/Team2021";
import Team2020 from "~/components/Team2020";

export default {
  components: {
    Team2021,
    Team2020
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
