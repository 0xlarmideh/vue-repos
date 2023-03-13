<template>
  <p :class="['text-md', 'font-regular',  className]">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>


