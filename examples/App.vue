<template>
  <div id="app">
    <div>header</div>
    <div class="main-cnt">
      <side-nav class="nav"></side-nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>
