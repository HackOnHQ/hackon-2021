<template>
  <div class="polygon-page">
    <PolygonSection />
  </div>
</template>

<script>
import PolygonSection from "~/components/Polygon";

export default {
  components: {
    PolygonSection
  }
};
</script>

<style lang="scss" scoped>
.polygon-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
