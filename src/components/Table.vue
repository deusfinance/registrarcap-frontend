value<template>
  <div>
    <b-form-radio-group class="float-left" style="padding-bottom: 10px;"
      v-model="selected"
      :options="options"
      buttons
      button-variant="outline-secondary">
    </b-form-radio-group>

    <b-table id="coinTable" class="text-left text-white-50" style="margin-top: 20px;" head-variant="dark" responsive
             :items="items"
             :fields="fields"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :per-page="perPage"
             :current-page="currentPage">
      <template v-slot:cell(registrar)="{value}">
        <a :href="'/' + value"><span class="text-white">{{value}}</span></a>
      </template>
      <template v-slot:cell(price)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
      <template v-slot:cell(oneHour)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneDay)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(sevenDays)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneDayVolume)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
      <template v-slot:cell(marketCapRegistrar)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
      <template v-slot:cell(marketCapAsset)="{value}">
        <span v-if="selected == 'usd'">${{formatNumber(value.usd)}}</span>
        <span v-else>{{formatNumber(value.eth)}} ETH</span>
      </template>
    </b-table>

    <b-pagination class="float-right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="coinTable"
    ></b-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Table',
  data() {
    return {
      perPage: 100,
      currentPage: 1,
      sortBy: 'index',
      sortDesc: false,
      fields: [
        { key: 'index', label: '#', sortable: true },
        { key: 'registrar', label: 'Registrar', sortable: true },
        { key: 'price', label: 'Price', sortable: true },
        { key: 'oneHour', label: '1h', sortable: true },
        { key: 'oneDay', label: '24h', sortable: true },
        { key: 'sevenDays', label: '7d', sortable: true },
        { key: 'oneDayVolume', label: '24h Volume', sortable: true },
        { key: 'marketCapRegistrar', label: 'Mkt Cap (Registrar)', sortable: true },
        { key: 'marketCapAsset', label: 'Mkt Cap (Asset)', sortable: true },
        { key: 'lastSevenDays', label: 'Last 7 Days', sortable: true },
      ],
      // Must be fetched from server
      items: [
        {
          'index': 1,
          'registrar': 'DEUS',
          'price': {
            'usd': 1128597,
            'eth': 50
          },
          'oneHour': 0.1,
          'oneDay': -2,
          'sevenDays': 10,
          'oneDayVolume': {
            'usd': 19454767,
            'eth': 20
          },
          'marketCapRegistrar': {
            'usd': 208943192,
            'eth': 30
          },
          'marketCapAsset': {
            'usd': 12323,
            'eth': 20
          },
          'lastSevenDays': 'graph'
        },
        {
          'index': 2,
          'registrar': 'DEA',
          'price': {
            'usd': 37063,
            'eth': 60,
          },
          'oneHour': -0.1,
          'oneDay': 2,
          'sevenDays': 10,
          'oneDayVolume': {
            'usd': 10505800,
            'eth': 10
          },
          'marketCapRegistrar': {
            'usd': 41848909,
            'eth': 20
          },
          'marketCapAsset': {
            'usd': 1000000,
            'eth': 30
          },
          'lastSevenDays': 'graph'
        },
        {
          'index': 3,
          'registrar': 'rTSLA',
          'price': {
            'usd': 0.994344,
            'eth': 40,
          },
          'oneHour': 0.1,
          'oneDay': 2,
          'sevenDays': -10,
          'oneDayVolume': {
            'usd': 30946569,
            'eth': 40
          },
          'marketCapRegistrar': {
            'usd': 15626080,
            'eth': 20
          },
          'marketCapAsset': {
            'usd': 123232455,
            'eth': 30
          },
          'lastSevenDays': 'graph'
        }
      ],
      selected: 'usd',
      options: [
        { value: 'usd', text: 'USD' },
        { value: 'eth', text: 'ETH' },
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length;
    }
  },
  created(){
    axios.get(this.endpoint('/prices/')).then(res => {
      this.items = res.data;
    })
    
  },
  methods : {
    formatNumber(number) {
      var formatter = new Intl.NumberFormat('en-US');
      return formatter.format(number);
    }
  }
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
