<template>
  <div id="app">
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="showNavigation = true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Cook M</span>
      </md-toolbar>

      <md-drawer :md-active.sync="showNavigation">

        <md-list>
        <md-list-item>
          <md-icon>child_care</md-icon>
          <span class="md-list-item-text"><router-link to="/" class="menu-link">ホーム</router-link></span>
        </md-list-item>

          <md-list-item>
            <md-icon>sentiment_satisfied_alt</md-icon>
            <span class="md-list-item-text"><router-link to="/company" class="menu-link">会社紹介</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>face</md-icon>
            <span class="md-list-item-text"><router-link to="/business" class="menu-link">事業紹介</router-link></span>
          </md-list-item>

          <md-list-item>
            <md-icon>insert_emoticon</md-icon>
            <span class="md-list-item-text"><router-link to="/service" class="menu-link">サービス案内</router-link></span>
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

   // Demo purposes only
  .md-drawer {
    width: 200px;
    background-color: black;
  }

  .md-content {
    padding: 16px;
  }

  .md-toolbar {
    color: black;
    background-color: black;
  }

  .md-title {
    color: white;
  }

  .md-icon {
    color: white;
  }

  .menu-link {
    color: white;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: black;
    margin-top: 0px;
  }
</style>
