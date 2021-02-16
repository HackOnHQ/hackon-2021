<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right">
    <slot></slot>
  </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      element: null,
    };
  },
  methods: {
    scrollTop() {
      this.element.scrollTop = 0;
    },
    scrollListener() {
      console.log(this.element.scrollTop);
      this.visible = this.element.scrollTop > 1500;
    },
  },
  mounted() {
    console.log("ds");
    this.element = document.getElementById("__layout");
    this.element.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    this.element.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>