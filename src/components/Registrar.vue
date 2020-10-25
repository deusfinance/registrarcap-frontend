<template>
  <div style="padding-left: 20em; padding-right: 20em;">
    <h1 class="text-white">{{ $route.params.registrar.toUpperCase() }}</h1>
    <h3 class="text-white">
      {{ price }}
      <span v-if="items[0]['oneDay'] >= 0" class="text-success">{{ items[0]['oneDay'] }}%</span>
      <span v-else class="text-danger">{{ items[0]['oneDay'] }}%</span>
    </h3>

    <div class="text-white">
      Market Cap (Registrar): $5,788,804<br>
      Market Cap (Asset): $5,788,804<br>
      24 Hour Trading Vol: $1,028,532<br>
      Max Supply: 2,657,016<br>
    </div>

    <br>

    <b-table :items="items" :fields="fields" class="text-center" responsive bordered>
      <template v-slot:cell(oneHour)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneDay)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneWeek)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(twoWeeks)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneMonth)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
      <template v-slot:cell(oneYear)="{value}">
        <span v-if="value >= 0" class="text-success">{{value}}%</span>
        <span v-else class="text-danger">{{value}}%</span>
      </template>
    </b-table>

    <b-form-radio-group class="float-left"
      v-model="chartSelected"
      :options="chartOptions"
      buttons
      button-variant="outline-secondary">
    </b-form-radio-group>

    <b-form-radio-group class="float-right"
      v-model="timeSelected"
      :options="timeOptions"
      buttons
      button-variant="outline-secondary">
    </b-form-radio-group>

    <br>
    <br>

    <trading-vue
      :data="this.$data"
      :title-txt="this.titleTxt"
      :width="1300">
    </trading-vue>
  </div>
</template>

<script>
import TradingVue from 'trading-vue-js';

export default {
  name: 'Registrar',
  components: { TradingVue },
    data() {
        return {
            titleTxt: "RegistrarCap",
            price: 2.1,
            fields: [
              { key: 'oneHour', label: '1h' },
              { key: 'oneDay', label: '24h' },
              { key: 'oneWeek', label: '7d' },
              { key: 'twoWeeks', label: '14d' },
              { key: 'oneMonth', label: '30d' },
              { key: 'oneYear', label: '1y' },
            ],
            items: [
              {
                "oneHour": -10,
                "oneDay": 20,
                "oneWeek": 5,
                "twoWeeks": 100,
                "oneMonth": -10,
                "oneYear": -50,
              },
            ],
            timeSelected: 'oneDay',
            timeOptions: [
              { value: 'oneDay', text: '24h' },
              { value: 'oneWeek', text: '7d' },
              { value: 'twoWeeks', text: '14d' },
              { value: 'oneMonth', text: '30d' },
              { value: 'threeMonths', text: '90d' },
              { value: 'halfYear', text: '180d' },
              { value: 'oneYear', text: '1y' },
              { value: 'max', text: 'Max' },
            ],
            chartSelected: 'price',
            chartOptions: [
              { value: 'price', text: 'Price' },
              { value: 'marketCapRegistrar', text: 'Market Cap (Registrar)' },
              { value: 'marketCapAsset', text: 'Market Cap (Asset)' },
            ],
            ohlcv: [
              [ 1551128400000, 33,  37.1, 14,  14,  196 ],
              [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
              [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
              [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
              [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ],
            ],
        }
    }
};
</script>

<style>
  body {
    background: linear-gradient(233deg,#190b1b,#181818);
    background-attachment: fixed!important;
    background-repeat: no-repeat!important;
    height: 100%;
  }
  .table {
    color: rgba(255, 255, 255, 0.5);
  }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #6c757d;
  }
  .table-bordered th, .table-bordered td {
    border: 1px solid #6c757d;
  }
</style>

