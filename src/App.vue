<template>
  <div id="app">
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">My Title</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">

        <md-list>
        <md-list-item>
          <md-icon>child_care</md-icon>
          <span class="md-list-item-text"><router-link to="/top">ホーム</router-link></span>
        </md-list-item>

          <md-list-item>
            <md-icon>sentiment_satisfied_alt</md-icon>
            <span class="md-list-item-text"><router-link to="/company">会社紹介</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>face</md-icon>
            <span class="md-list-item-text"><router-link to="/business">事業紹介</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>insert_emoticon</md-icon>
            <span class="md-list-item-text"><router-link to="/service">サービス案内</router-link></span>
          </md-list-item>

        </md-list>
      </md-drawer>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  })
}
</script>

<style lang="scss" scoped>
  .page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
