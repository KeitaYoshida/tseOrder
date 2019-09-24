<template>
  <div class="main flexbox-container-vertical-center">
    <p class="site_title light-blue--text text--darken-3">tse order</p>
    <p class="site_title_jp light-blue--text text--darken-3">
      多摩川精機エレクトロニックス
      <span class="site_title_jp_pick green--text text--darken-3">発注</span>
      リスト
    </p>
    <p>
      <v-layout row wrap>
        <v-flex xs6 class="text-xs-right">
          <v-text-field v-model="comid" name="comid" label="com id" class="px-4"></v-text-field>
        </v-flex>
        <v-flex xs6 class="text-xs-left">
          <v-text-field v-model="dataid" name="dataid" label="data id" class="px-4"></v-text-field>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <v-btn color="light-blue darken-3" outline width="80%" small class="mt-4">login</v-btn>
        </v-flex>
      </v-layout>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      comid: "",
      dataid: ""
    };
  },
  created: function() {
    this.init();
    const db = firebase.database();
    db.ref("val").set({
      bbbb: "data",
      cccc: "val"
    });
    db.ref("val").on("value", function(sn) {
      console.log(sn.val());
    });
    console.log("teesta");
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss" scoped>
.site_title {
  font-size: 1.8rem;
}
.site_title_jp {
  font-size: 0.9rem;
}
.site_title_jp_pick {
  font-size: 1.2rem;
}
.main {
  width: 100%;
  height: 100%;
}
.flexbox-container-vertical-center {
  display: flex; /* 子要素をflexboxで揃える */
  flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center; /* 子要素をflexboxにより中央に配置する */
}
span {
}
</style>
