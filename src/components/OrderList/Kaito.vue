<template>
  <v-container grid-list-xs>
    <table class="mt-4">
      <tr>
        <th>
          納品依頼日
          <br />発注コード
        </th>
        <th>品目コード/rev</th>
        <th>品名／形式</th>
        <th>注文数</th>
        <th>納品数</th>
        <th>単価</th>
        <th>納期回答</th>
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
        </td>
        <td class="text-xs-center" width="80px">
          <v-text-field name="nohin" type="number"></v-text-field>
        </td>
        <td class="text-xs-center" width="120px">
          <v-text-field v-model="item.tanka" name="tanka" type="number"></v-text-field>
        </td>
        <td class="text-xs-center" width="120px">
          <CalenderText label :defday="item.day_sitei" @select="select" />
        </td>
      </tr>
    </table>
  </v-container>
</template>

<script>
import CalenderText from "./../com/CalenderText";

export default {
  props: ["orders", "info"],
  components: { CalenderText },
  data: function() {
    return {};
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      axios.get("").then(res => {});
    },
    select(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="scss" scoped>
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
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
</style>
