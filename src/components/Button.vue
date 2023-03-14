<template>
  <button  :href="[link]" :class="['py-[.8rem]', 'px-[2.1rem]', 'rounded-full', 'text-white',  className ]">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
      
    link: {
      type: String,
      required: false
    },
    className: {
      type: String,
      default: ''
    }
  }
};
</script>


