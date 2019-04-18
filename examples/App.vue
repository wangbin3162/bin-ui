<template>
  <div id="app" flex="dir:top box:first">
    <main-header></main-header>
    <div class="main-cnt" flex>
      <side-nav class="nav" flex-box="0"></side-nav>
      <div class="page-container" flex-box="1">
        <b-scrollbar style="height:100%;">
          <router-view></router-view>
          <main-footer></main-footer>
        </b-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  #app {
    color: #444444;
    font-size: 14px;
    width: 100%;
    height: 100%;
    .main-cnt {
      margin: 48px auto;
      width: 1140px;
      background-color: #fff;
      box-shadow: 0 4px 30px 0 rgba(223, 225, 230, .5);
      .page-container {
        padding: 0;
        overflow: hidden;
        height: 100%;
        .bin-scrollbar__wrap {
          overflow-x: auto;
        }
        p, ul li {
          font-size: 14px;
          color: #5e6d82;
          line-height: 1.5em;
        }
        p {
          strong {
            display: block;
            padding: 8px 16px;
            background-color: #ecf8ff;
            border-radius: 4px;
            border-left: 5px solid #50bfff;
            margin: 20px 0;
          }
        }
        h2, h3, h4, h5 {
          font-weight: 400;
          color: #1f2f3d;
        }
        h2 {
          font-size: 28px;
          margin: 0;
          padding: 10px 0;
          border-bottom: 1px solid #c5d9e8;
        }
        h3 {
          font-size: 22px;
          margin: 55px 0 20px;
        }
        h4 {
          font-weight: 400;
          color: #1f2f3d;
          font-size: 16px;
        }
        table {
          width: 100%;
          background-color: #fff;
          color: #5e6d82;
          font-size: 14px;
          border-collapse: collapse;
          overflow: auto;
          margin-bottom: 50px;
          thead, tbody {
            width: 100%;
          }
          th, td {
            border-top: 1px solid #f3f7fa;
            border-bottom: 1px solid #dcdfe6;
            padding: 15px;
            max-width: 250px;
          }
          th {
            background-color: #fafbfc;
          }
        }
      }
    }
  }

</style>
