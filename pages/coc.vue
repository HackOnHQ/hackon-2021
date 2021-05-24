<template>
  <div class="coc-page">
    <CodeOfConduct />
  </div>
</template>

<script>
import CodeOfConduct from "~/components/CodeOfConduct";

export default {
  components: {
    CodeOfConduct
  }
};
</script>

<style lang="scss" scoped>
.coc-page {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
</style>
