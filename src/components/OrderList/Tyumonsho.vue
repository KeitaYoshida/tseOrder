<template>
  <v-card class="a4 pa-3 mb-3">
    <v-card-title class="text-xs-center">
      <h2>注文リスト</h2>
    </v-card-title>
    <v-card-text>
      <v-layout wrap class="mini">
        <v-flex xs7 class="text-xs-left">
          <ul>
            <li class="lg">{{ info.com_name }} 御中</li>
            <li class="lg">ご担当者 様</li>
          </ul>
        </v-flex>
        <v-flex xs5 class="text-xs-right">
          <ul>
            <li>多摩川精機エレクトロニックス㈱</li>
            <li>〒399-1801 泰阜村3136</li>
            <li>TEL: 0260-26-2221</li>
            <li>FAX: 0260-26-2337</li>
          </ul>
        </v-flex>
        <v-flex xs7>
          <p>下記の通り注文リストを連絡いたします。</p>
          <p>注文内容に問題がある場合は速やかに連絡お願いいたします。</p>
        </v-flex>
        <v-flex xs3 offset-xs2 class="text-xs-right">
          <p class="tanto">吉田 啓太{{ }}</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center mt-4">
          <p>形式:</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center mt-4">
          <p>注文コード: {{ info.order_code }}</p>
        </v-flex>
        <v-flex xs4 class="text-xs-center mt-4">
          <p>発行日: {{ info.order_day.slice(0, 10) }}</p>
        </v-flex>
      </v-layout>
      <table class="mt-4">
        <tr>
          <th>
            納品依頼日
            <br />発注コード
          </th>
          <th>品目コード/rev</th>
          <th>品名／形式</th>
          <th>注文数／単価</th>
          <th>金額</th>
        </tr>
        <tr v-for="(item, index) in orders" :key="index">
          <td class="text-xs-center">
            {{ item.day_sitei}}
            <br />
            {{ item.order_id }}
          </td>
          <td class="text-xs-center">
            <p>{{ item.order_code }}</p>
            <p>{{ Number(item.item_rev).numToRev() }}</p>
          </td>
          <td class="text-xs-center">
            <p v-if="item.item_model !== 'null'">{{ item.item_model }}</p>
            <p v-if="item.item_name !== 'null'">{{ item.item_name }}</p>
          </td>
          <td class="text-xs-center">
            <p>{{ item.order_num }}</p>
            <p>{{ Number(item.tanka) }}</p>
          </td>
          <td class="text-xs-center">
            <p>{{ Number(item.order_price).toLocaleString() }}</p>
          </td>
        </tr>
      </table>
      <p class="end">
        <span>合計金額：{{ info.total_price.toLocaleString() }}</span>
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
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
    init() {
      console.log(this.info);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  width: 100%;
}
li {
  list-style: none;
}
.mini {
  font-size: 0.8rem;
}
.lg {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #aaa;
}
.tanto {
  font-size: 1rem;
  border-bottom: 1px solid #aaa;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
th {
  font-weight: 300;
  font-size: 0.9rem;
}
td {
  border-bottom: 1px solid #aaa;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.end {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1.1rem;
}
</style>
