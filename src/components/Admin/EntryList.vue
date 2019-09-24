<template>
  <div>
    <template v-for="(item, index) in entrys">
      <div :key="index">
        <v-toolbar flat color="transparent">
          <v-chip
            class="chip chip_id teal darken-3 teal--text text--darken-3"
            outline
          >{{ item[keyval][0].com_id }}</v-chip>
          <v-chip
            class="chip chip_name teal darken-3 teal--text text--darken-3"
            outline
          >{{ item[keyval][0].com_name }}</v-chip>
          <v-spacer></v-spacer>
          <v-btn
            class="chip"
            color="success"
            small
            outline
            :to="rtOrderAddr(item[keyval][0])"
          >view customer page</v-btn>
        </v-toolbar>
        <v-data-table
          :headers="headers"
          :items="item[keyval]"
          hide-actions
          class="elevation-1 mt-3 mb-5"
          :pagination.sync="pagination"
          item-key="id"
          loading="true"
          color="transparent"
        >
          <template v-slot:items="props">
            <td class="text-xs-center">{{ props.item.order_cmpt.slice(0, 11) }}</td>
            <td class="text-xs-center">{{ props.item.order_code }}</td>
            <td class="text-xs-center">
              <p>
                {{ props.item.item_model }}
                <span
                  v-if="props.item.item_rev_flg !== false"
                >{{ props.item.item_rev }}</span>
              </p>
              <p>{{ props.item.item_name }}</p>
            </td>
            <td class="text-xs-center">
              <p>{{ props.item.order_num }}</p>
              <p>{{ props.item.day_sitei }}</p>
            </td>
            <td class="text-xs-center">
              <p>{{ props.item.tanka }}</p>
              <p>{{ props.item.order_price }}</p>
            </td>
          </template>
        </v-data-table>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["entrys", "keyval"],
  components: {},
  data: function() {
    return {
      pagination: {},
      headers: [
        { text: "親形式", value: "order_cmpt", align: "center" },
        { text: "品目コード", value: "order_code", align: "center" },
        { text: "品目形式/名", value: "item_model", align: "center" },
        { text: "手配数/依頼日", value: "order_num", align: "center" },
        { text: "単価/総額", value: "tanka", align: "center" }
      ]
    };
  },
  created: function() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.entrys);
      // axios.get("").then(res => {});
    },
    rtOrderAddr(d) {
      return "/orderlist/" + d.com_id + "/" + this.keyval;
    }
  }
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}
</style>
