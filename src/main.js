import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

<script>
  onCreated()
  {AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 300, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
  })}
</script>;

createApp(App).use(router).mount("#app");
