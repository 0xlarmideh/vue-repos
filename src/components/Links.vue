<template>
  <a
    class="inline-block text-sm border-b-2 border-transparent hover:border-slate-600 {{ className }}"
    :href=" [link] "
    target="_blank"
    rel="noreferrer"
    >{{ title }}</a
  >
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
  },
};
</script>
