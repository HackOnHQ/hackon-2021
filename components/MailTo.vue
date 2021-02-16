<script>
export default {
  name: "MailTo",
  props: ["email"],
  data() {
    return {
      text: "Copy email address",
    };
  },
  methods: {
    copyToClipboard(email) {
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      const selected =
        document.getSelection().rangeCount > 0
          ? document.getSelection().getRangeAt(0)
          : false;
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
      this.text = "Copied to clipboard!";
      setTimeout(() => {
        this.text = "Copy email address";
      }, 3000);
    },
  },
};
</script>
<template>
  <div class="tooltip">
    <a
      class="mail-link"
      @click.prevent="copyToClipboard(email)"
      v-bind:href="'mailto:' + email"
      ref="email"
      >{{ email }}</a
    >
    <span class="tooltiptext">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.mail-link {
  color: var(--colour-pink);
}

.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0.5em;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -45%;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltiptext {
  font-size: 0.8em;
  white-space: nowrap;
}
</style>