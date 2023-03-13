<template>
  <h3 :class="['text-xl', 'font-bold',   className ]">{{ text }}</h3>
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


