<template>
  <div>
    <b-form-radio-group
      class="float-left"
      style="padding-bottom: 10px;"
      v-model="selected"
      :options="options"
      buttons
      button-variant="outline-secondary"
    ></b-form-radio-group>

    <b-table
      id="coinTable"
      class="text-left text-white-50"
      style="margin-top: 20px;"
      head-variant="dark"
      responsive
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :per-page="perPage"
      :current-page="currentPage"
      :busy="isBusy"
    >
      <template #table-busy>
        <div class="text-center">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template v-slot:cell(registrar)="{value}">
        <router-link class="text-white" :to="{name: 'Registrar', params: {registrar: value}}">{{ value }}</router-link>
      </template>
      <template v-slot:cell(price)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd, 2)}}</span>
        <span v-else>{{value.eth}} ETH</span>
      </template>
      <template v-slot:cell(oneHour)="{value}">
        <span v-if="value >= 0" class="text-success">{{formatNumber(value, 1)}}%</span>
        <span v-else class="text-danger">{{formatNumber(value, 1)}}%</span>
      </template>
      <template v-slot:cell(oneDay)="{value}">
        <span v-if="value >= 0" class="text-success">{{formatNumber(value, 1)}}%</span>
        <span v-else class="text-danger">{{formatNumber(value, 1)}}%</span>
      </template>
      <template v-slot:cell(sevenDays)="{value}">
        <span v-if="value >= 0" class="text-success">{{formatNumber(value, 1)}}%</span>
        <span v-else class="text-danger">{{formatNumber(value, 1)}}%</span>
      </template>
      <template v-slot:cell(oneDayVolume)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd, 0)}}</span>
        <span v-else>{{formatNumber(value.eth, 0)}} ETH</span>
      </template>
      <!-- TODO: bring back market caps, when backend returns them
      <template v-slot:cell(marketCapRegistrar)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
      <template v-slot:cell(marketCapAsset)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
      -->
    </b-table>

    <b-pagination
      class="float-right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="coinTable"
    ></b-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Table",
  data() {
    return {
      isBusy: true,
      perPage: 100,
      currentPage: 1,
      sortBy: "index",
      sortDesc: false,
      fields: [
        { key: "index", label: "#", sortable: true },
        { key: "registrar", label: "Registrar", sortable: true },
        { key: "price", label: "Price", sortable: true },
        { key: "oneHour", label: "1h", sortable: true },
        { key: "oneDay", label: "24h", sortable: true },
        { key: "sevenDays", label: "7d", sortable: true },
        { key: "oneDayVolume", label: "24h Volume", sortable: true },
        { key: "marketCapRegistrar", label: "Mkt Cap (Registrar)", sortable: true },
        { key: "marketCapAsset", label: "Mkt Cap (Asset)", sortable: true },
        { key: "lastSevenDays", label: "Last 7 Days", sortable: true },
      ],
      items: [],
      selected: "usd",
      options: [
        { value: "usd", text: "USD" },
        { value: "eth", text: "ETH" },
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  created() {
    axios.get(this.endpoint("/prices/")).then((res) => {
      this.items = res.data;
      this.isBusy = false;
    });
  },
  methods: {
    formatNumber(number, digits) {
      var formatter = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      });
      return formatter.format(number);
    },
  },
};
</script>

<style>
/*Table*/
.table thead th {
  vertical-align: bottom;
  border-bottom: 1px solid #dee2e6;
}
.table .thead-dark tr th {
  background-color: #23272b;
  color: rgba(255, 255, 255, 0.5) !important;
}
.table td {
  border-top: 1px solid grey;
  color: rgba(255, 255, 255, 0.5);
}

/*Pagination*/
.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.5);
  background-color: #23272b;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.page-link:hover {
  z-index: 2;
  color: white;
  text-decoration: none;
  background-color: #6c757d;
  border-color: #6c757d;
}
.page-item.active .page-link {
  z-index: 3;
  color: white;
  background-color: #6c757d;
  border-color: #6c757d;
}
.page-im.disabled .page-link {
  z-index: 3;
  color: black;
  background-color: white;
  border: 1px solid rgba(255, 255, 255, 0.5);
}
</style>
