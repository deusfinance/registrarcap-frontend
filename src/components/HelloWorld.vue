<template>
  <div>
      <button @click="SelectWinner">Select a Winner</button>
  <p>
    {{winner}}
  </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWord',
  data() {
    return {
      names: null,
      winner: null,
    };
  },
  mounted() {
    this.FetchData();
  },
  methods: {
    FetchData() {
      const app = this;
      axios.get('/register_api').then((response) => {
        app.names = response.data.names;
      });
    },
    SelectWinner() {
      const winner = this.names[Math.floor(Math.random() * this.names.length)];
      this.winner = winner;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
