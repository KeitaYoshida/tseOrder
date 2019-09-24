<template>
  <div v-if="orders">
    <v-toolbar flat color="transparent">
      {{ info.com_name }}
      <v-spacer></v-spacer>
      <span>発行日:{{ info.order_day }}</span>
    </v-toolbar>
    <v-tabs v-model="tabs" color="transparent" slider-color="primary" fixed-tabs>
      <v-tab>注文リスト</v-tab>
      <v-tab>現品票</v-tab>
      <v-tab>単価訂正・納期回答・納品登録</v-tab>
      <v-tab>会社情報</v-tab>
      <v-tab-item>
        <div class="a4-back">
          <div class="a4-area pt-3 mb-4 pb-5">
            <Tyumonsho :orders="orders" :info="info" v-if="orders" />
          </div>
        </div>
      </v-tab-item>
      <v-tab-item>
        <div class="a4-back">
          <div class="a4-area pt-3 mb-4 pb-5">
            <Genpinhyo :orders="orders" :info="info" v-if="orders" />
          </div>
        </div>
      </v-tab-item>
      <v-tab-item>
        <Kaito :orders="orders" :info="info" v-if="orders" />
      </v-tab-item>
      <v-tab-item></v-tab-item>
    </v-tabs>
    <v-bottom-nav fixed value="value" active.sync="value">
      <v-btn flat>
        <span>HOME</span>
        <v-icon>fas fa-home</v-icon>
      </v-btn>
      <v-btn flat>
        <span>GET PDF</span>
        <v-icon>far fa-file-pdf</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/database";
import Tyumonsho from "./Tyumonsho";
import Genpinhyo from "./Genpinhyo";
import Kaito from "./Kaito";

export default {
  props: [],
  components: { Tyumonsho, Genpinhyo, Kaito },
  data: function() {
    return {
      orders: null,
      tabs: 0,
      info: {
        com_name: "",
        order_day: "",
        total_price: "",
        model: "",
        order_code: ""
      }
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      let comid = this.$route.params.comid;
      let keys = this.$route.params.keys;
      this.info.order_day = this.formatDay(keys);
      this.info.order_code = this.formatCode(keys);
      let db = firebase.database();
      db.ref("orders/" + comid + "/" + keys).on("value", snapshot => {
        if (snapshot.val() === null) {
          return;
        }
        this.orders = snapshot.val();
        this.info.com_name = this.orders[0].com_name;
        console.log(this.orders);
        let price = 0;
        this.orders.forEach(ar => {
          price = price + Number(ar.order_price);
        });
        this.info.total_price = price;
      });
    },
    formatDay(keys) {
      let full = String(parseInt(keys.slice(0, 12), 16));
      let yyyy = full.slice(0, 4);
      let mm = full.slice(4, 6);
      let dd = full.slice(6, 8);
      let h = full.slice(8, 10);
      let m = full.slice(10, 12);
      let s = full.slice(12, 14);
      return yyyy + "-" + mm + "-" + dd + " " + h + ":" + m;
    },
    formatCode(keys) {
      return keys.slice(16);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
