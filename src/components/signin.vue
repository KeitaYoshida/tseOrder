<template>
  <div class="main flexbox-container-vertical-center">
    <p class="site_title light-blue--text text--darken-3">管理画面ログイン</p>
    <p>
      <v-layout row wrap>
        <v-flex xs6 class="text-xs-right">
          <v-text-field v-model="userid" name="userid" label="user id" class="px-4"></v-text-field>
        </v-flex>
        <v-flex xs6 class="text-xs-left">
          <v-text-field
            v-model="password"
            type="password"
            name="password"
            label="password"
            class="px-4"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 class="text-xs-center">
          <v-btn
            color="light-blue darken-3"
            outline
            width="80%"
            small
            class="mt-4"
            @click="signIn"
          >login</v-btn>
        </v-flex>
      </v-layout>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  props: [],
  components: {},
  data: function() {
    return {
      userid: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.userid, this.password)
        .then(
          user => {
            this.$router.push("/Admin");
          },
          err => {
            alert(err.message);
          }
        );
    }
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
