<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 5L13.2375 6.7625L20.2125 13.75H5V16.25H20.2125L13.2375 23.2375L15 25L25 15L15 5Z"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
    props: {
        size: {
            default: "24",
            type: String
        }
    }
}
</script>
