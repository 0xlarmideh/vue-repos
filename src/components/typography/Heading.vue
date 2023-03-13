<template>
  <h1 :class="['text-4xl', 'font-semibold', className ]">{{ title }}</h1>
</template>

<script>
export default {
  props: {
    title: {
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


