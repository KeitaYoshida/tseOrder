<template>
  <v-card class="a4 pa-3 mb-3">
    <v-layout wrap>
      <v-flex xs4 class="genpin pa-3" v-for="(item, index) in orders" :key="index">
        <h2>現品票</h2>
        <v-layout wrap align-space-around justify-center row fill-height>
          <v-flex xs5>形式</v-flex>
          <v-flex xs7></v-flex>
          <v-flex xs5>注文コード</v-flex>
          <v-flex xs7>{{ info.order_code }}</v-flex>
          <v-flex xs5>注文ID</v-flex>
          <v-flex xs7>{{ item.order_id }} ({{ item.order_key }})</v-flex>
          <v-flex xs5>注文数</v-flex>
          <v-flex xs7>{{ item.order_num }}</v-flex>
          <v-flex xs5>納品数</v-flex>
          <v-flex xs7></v-flex>
          <v-flex xs5>品名</v-flex>
          <v-flex xs7>{{ item.item_name }}</v-flex>
          <v-flex xs5>品目形式</v-flex>
          <v-flex xs7>{{ item.item_model }}</v-flex>
          <v-flex xs5 class="text-xs-center">検査印</v-flex>
          <v-flex xs7 class="text-xs-center">QR Code</v-flex>
          <v-flex xs5 class="endbox">
            <v-btn outline icon color="#ccc">印</v-btn>
          </v-flex>
          <v-flex xs7 class="endbox">
            <qriously value="Hello World!" />
          </v-flex>
          <v-flex xs12 class="text-xs-right">
            <span class="mini">発行日：{{ info.order_day.slice(0, 10) }}</span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import Vue from "vue";
import VueQriously from "vue-qriously";
Vue.use(VueQriously);

export default {
  props: ["orders", "info"],
  components: {},
  data: function() {
    return {};
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {}
  }
};
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
  text-align: center;
  font-weight: 300;
  font-size: 1rem;
}
.genpin {
  font-size: 0.9rem;
  .flex {
    border-bottom: 1px solid #aaa;
  }
}
.endbox {
  height: 100px;
  text-align: center;
}
.mini {
  font-size: 0.6rem;
}
</style>
