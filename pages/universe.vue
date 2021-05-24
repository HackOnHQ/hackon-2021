<template>
  <div class="hackonUniverse-page">
    <HackonUniverse />
  </div>
</template>

<script>
import HackonUniverse from "~/components/HackonUniverse";

export default {
  components: {
    HackonUniverse
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
