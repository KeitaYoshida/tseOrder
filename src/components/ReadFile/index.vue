<template>
  <div>
    <template v-if="mode==='def'">
      <Drag @fileRead="fileRead"></Drag>
    </template>
    <template v-if="mode==='loading'">
      <Loading></Loading>
    </template>
    <template v-if="mode==='entry'">
      <EntryList :entrys="entrys" :keyval="key" v-if="entrys">end</EntryList>
    </template>
  </div>
</template>

<script>
var iconv = require("iconv-lite");
iconv.skipDecodeWarning = true;
var jschardet = require("jschardet");

import firebase from "firebase/app";
import "firebase/database";
import Drag from "./Drag";
import Loading from "./../com/Loading";
import EntryList from "./../Admin/EntryList";

export default {
  components: {
    Drag,
    Loading,
    EntryList
  },
  data: function() {
    return {
      mode: "def",
      entrys: null,
      key: ""
    };
  },
  methods: {
    fileRead(file) {
      let reader = new FileReader();
      let fname = file.name;
      if (fname.slice(0, 10) !== "TSE_ORDER_") {
        alert("file error");
        return;
      }
      let key = fname.slice(10, fname.length - ".csv".length);
      this.key = key;

      reader.onload = e => {
        this.mode = "loading";
        let f = e.target.result;
        let enc = jschardet.detect(f).encoding;
        let res = iconv.decode(f, enc);
        const parse = require("csv-parse/lib/es5/sync");
        res = parse(res);

        let entrys = {};
        let headers = {};
        res.forEach((sp, index) => {
          if (index === 0) {
            headers = sp;
            return;
          }
          if (sp[0] in entrys === false) {
            entrys[sp[0]] = {};
            entrys[sp[0]][key] = [];
          }
          let ind = entrys[sp[0]][key].push({}) - 1;
          sp.forEach((ar, n, o) => {
            entrys[sp[0]][key][ind][headers[n]] = ar;
          });
        });
        for (let com of Object.keys(entrys)) {
          console.log(entrys[com]);
          // firebase
          //   .database()
          //   .ref("orders/" + com + "/" + key)
          //   .set(entrys[com][key]);
        }
        this.mode = "entry";
        this.entrys = entrys;
      };
      reader.readAsBinaryString(file);
    },
    clear() {
      this.mode = "";
      this.csv = [];
    }
  }
};
</script>

<style lang="scss" scoped>
#file_input_expense {
  display: none;
}
</style>