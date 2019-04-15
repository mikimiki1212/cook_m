<template>
<div>
  <div class="bg-assets">
    <span class="text_area">
      <h1>家族のための<p class="p-small">すてきなレシピを。</p>
      </h1>
    </span>
  </div>
  <div class="bg-newsinfo">
    <span class="text_area2">
      <h1>NEWS / INFO</h1>
    </span>
    <md-table class=newsinfo>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

      <md-table-row>
        <md-table-cell>2019/03/27</md-table-cell>
        <md-table-cell>人気インスタグラマーを起用したイベントを料理教室クックエムで開催</md-table-cell>
      </md-table-row>

    </md-table>

    <md-button class="md-raised more">MORE→</md-button>
  </div>
  <small>&copy;株式会社クックエム All Rights Reserved.</small>
</div>
</template>


<script>
export default {
  name: 'Top'
}
</script>


<style>
/*トップ画像の設定*/
.bg-assets {
  position: relative;
  background: url(../../static/elli-o-33861-unsplash.jpg) no-repeat 50%;
  ;
  background-size: cover;
  min-height: 300px;
  margin-bottom: 0;
}

/*トップ画像の上の文字の設定*/
.bg-assets .text_area {
  position: absolute;
  top: 34%;
  left: 0;
  right: 0;
  font-weight: 700;
  color: white;
  text-align: center;
  letter-spacing: .1em;
  -webkit-font-smoothing: antialiased;
}

@media screen and (min-width:1024px) {
  /*　for PC　*/
  .bg-assets .text_area {
    font-size: 2.5vw;
    top: 28%;
  }
}

/*トップ画像の上の文字の行間設定*/
.p-small {
  line-height: 0%;
}

/*文字『newsinfo』の設定*/
.text_area2 {
  left: 0;
  right: 0;
  color: black;
  letter-spacing: .3em;
}

/*テーブル『newsinfo』の設定*/
.newsinfo {
  left: 0;
  right: 0;
  margin-left: 5%;
  margin-right: 5%;
  color: black;
  text-align: left;
  letter-spacing: .3em;
}

/*ボタン『more』の設定*/
.more {
  color: white;
  background-color: black;

}
</style>
