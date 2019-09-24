<template>
  <div id="admin">
    <v-toolbar color="red darken-2" dark>
      <span class="title">Torks Firebase</span>
    </v-toolbar>
    <v-container grid-list-xs>
      <v-tabs v-model="tabs" color="transparent" fixed-tabs slider-color="indigo darken-3">
        <v-tab>手配ファイル登録</v-tab>
        <v-tab>取引先別手配リスト</v-tab>
        <v-tab-item>
          <v-card color="transparent" flat>
            <v-card-text>
              <FileRead />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card color="transparent" flat>
            <v-card-text>
              <FileRead />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import FileRead from "../ReadFile/index";

export default {
  props: [],
  components: {
    FileRead
  },
  data: function() {
    return {
      tabs: 0
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      // console.log(firebase.auth().currentUser);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
