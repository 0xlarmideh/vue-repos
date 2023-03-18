<template>
  <nav class="layout-navs py-[1.7rem] max-md:py-[.4rem] max-md:text-[16px] text-black">
    <p class="layout-link name">Abdulhameed</p>
    <div class="flex gap-[1.8rem] max-md:gap-[.8rem]">
      <router-link class="layout-link  " to="/">Home</router-link>
    <router-link class="layout-link" to="/repositories">Repos</router-link>
    <router-link class="layout-link" to="/404">404</router-link>
  </div>

  </nav>
</template>

<script>


export default {

}
</script>

<style type="text/tailwindcss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 1rem; */
  color: black;
  margin: .3rem 0;
}

.layout-navs {
  font-size: 1.2rem;

}
.layout-link {
  position: relative;
  list-style: none;
  /* margin: 0 .4rem; */
  padding: 0 ;
  cursor: pointer;
  text-decoration: none;
}

  .layout-link::after {
    content: "";
    background: white;
    height: 1.5px;
    width: 0%;
    left: 0;
    bottom: -5px;
    position:absolute;
    transition-duration: .5s;
  }
  
  .layout-link:hover::after {
    width: 100%;
  }


.name {
  padding-left: 0;
}

/* .layout-link:hover {
  border-color: #ccc;
} */

@media (max-width:987px)  { 
  .layout-link {
    padding: 0 .6rem
  }

 }
</style>
