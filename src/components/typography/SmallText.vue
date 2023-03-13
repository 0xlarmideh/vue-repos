<template>
  <p :class="['text-[1.9rem]', 'leading-[2.1rem]', 'font-regular',  className ]">{{ text }}</p>
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


