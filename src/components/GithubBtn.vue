<template>
  <button  :href="[link]" :class="['py-[.8rem]', 'px-[2.1rem]', 'rounded-full', 'text-white', 'bg-slate-700', 'flex', 'gap-[1rem]', 'items-center',  className ]">{{ text }} <Icon icon="ant-design:github-outlined" color="white" width="21" height="21" /></button>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
  components: {Icon},
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


