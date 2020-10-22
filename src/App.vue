<template>
  <div id="app">
    <h2 class="text-white text-center" style="padding-top: 10px; padding-bottom: 10px;">Top 3 Registrars by Market Capitalization</h2>

    <div style="padding-left: 2em; padding-right: 2em;">
      <rc-table></rc-table>
    </div>

    <rc-footer></rc-footer>
  </div>
</template>

<script>
import Table from '@/components/Table';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    "rc-table": Table,
    "rc-footer": Footer
  },
};
</script>

<style>
  body {
    background: linear-gradient(233deg,#190b1b,#181818);
    background-attachment: fixed!important;
    background-repeat: no-repeat!important;
    height: 100%;
  }
</style>
