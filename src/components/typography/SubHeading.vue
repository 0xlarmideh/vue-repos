<template>
  <h2 :class="['text-4xl', 'font-bold',   className ]">{{ text }}</h2>
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


