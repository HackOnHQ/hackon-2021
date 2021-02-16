<template>
  <ScrollTopComponent>
    <a class="btn">
      <img src="~/assets/up-arrow-black.svg" />
    </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from "~/components/ScrollTop";
export default {
  components: {
    ScrollTopComponent,
  },
};
</script>

<style>
.btn {
  border-radius: 50%;
  background-color: #c9c9c9;
  padding: 1em;
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  color: black;
  cursor: pointer;
  /* padding-top: 27px; */
  /* padding-left: 10px; */
  /* padding-right: 10px; */
  /* padding-bottom: 5px; */
}

.btn:hover {
  background-color: rgba(178, 178, 178, 1);
  transition: 0.5s;
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
}
</style>