<template>
  <div id="app">
    <router-view />
    <rc-footer></rc-footer>
  </div>
</template>

<script>

import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    "rc-footer": Footer,
  },
};
</script>

<style>
body {
  background: linear-gradient(233deg, #190b1b, #181818);
  background-attachment: fixed !important;
  background-repeat: no-repeat !important;
  height: 100%;
}
</style>
