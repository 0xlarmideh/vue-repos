<template>
  <nav class="layout-navs py-[1.7rem] max-md:py-[.4rem] max-md:text-[16px]">
    <p class="layout-link name">Abdulhameed Busari</p>
    <div>
      <router-link class="layout-link " to="/">Home</router-link>
    <router-link class="layout-link" to="/repositories">Repos</router-link>
    <router-link class="layout-link" to="/404">404</router-link>
  </div>
    
    <div class="color-mode">
    <p class="layout-link">Light</p>
    </div>
  </nav>
</template>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  color: black;
  /* padding: 0 1.4rem; */

  /* padding: .8rem 0; */
  margin: .9rem 0;
}

.layout-navs {
  font-size: 1.2rem;

}
.layout-link {
  list-style: none;
  padding: 0 1.7rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  border-radius: 10px;
  transition: border-color 0.2s ease-in-out;
  /* margin: 1rem 0; */
}

.name {
  padding-left: 0;
}

.layout-link:hover {
  border-color: #ccc;
}

@media (max-width:801px)  { 
  .layout-link {
    padding: 0 .6rem
  }
  .name {
    display: none;
  }
 }
</style>
