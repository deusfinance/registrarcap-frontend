<template>
  <footer class="fixed-bottom">
    <ul class="social">
      <li><a href="https://deus.finance" target="_blank" rel="noopener noreferrer">deus.finance</a></li>
      <li><a href="https://twitter.com/deusdao" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      <li><a href="https://medium.com/@deusfinance" target="_blank" rel="noopener noreferrer">Medium</a></li>
      <li><a href="https://github.com/deusfinance" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li><a href="https://discord.com/invite/DxdM7TW" target="_blank" rel="noopener noreferrer">Discord</a></li>
      <li><a href="https://t.me/deusfinance" target="_blank" rel="noopener noreferrer">Telegram</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');

  footer {
    height: 57px;
    margin-top: 40px;
    background: linear-gradient(238deg,#231827,#232323);
  }
  footer .social {
    height: 100%;
    text-align: right;
    font-family: Comfortaa;
    list-style-type: none;
    font-size: 20px;
    line-height: 57px;
  }
  footer .social li {
    display: inline-block;
    cursor: pointer;
    text-align: center;
    width: 200px;
  }
  footer .social li a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
  }
</style>
