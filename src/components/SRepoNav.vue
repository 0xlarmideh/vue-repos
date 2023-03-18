<template>
  <nav class="layout-navs py-[1.7rem] max-md:py-[.4rem] max-md:text-[16px] text-black">
      <router-link class="layout-link  " to="/">Back to Home</router-link>
    <router-link class="layout-link" :to="`/repositories/${nextId}`">Next: {next} </router-link>

  </nav>
</template>

<script>


export default {
  props: ['next', 'nextId']
}
</script>
