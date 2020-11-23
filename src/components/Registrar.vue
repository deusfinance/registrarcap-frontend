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

    <br>
    <br>

    <div class="TVChartContainer" :id="containerId" />

  </div>
</template>

<script>

import { widget } from '../charting_library.min';

export default {
    name: 'Registrar',
    props: {
      containerId: {
        default: 'tv_chart_container',
        type: String,
      },
      datafeedUrl: {
        default: 'https://demo_feed.tradingview.com',
        type: String,
      },
      libraryPath: {
        default: '/static/charting_library/',
        type: String,
      }
    },
    tvWidget: null,
    mounted() {

      const tvWidget = new widget({
        		debug: true, // set to true to show console logs
        		symbol: 'AAPL', // default symbol
        		interval: 'D', // default interval
        		fullscreen: false,
        		container_id: 'tv_chart_container',
        		datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.datafeedUrl),
        		library_path: this.libraryPath,
        		locale: "en",
        		drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
        		disabled_features: ["use_localstorage_for_settings"],
        		charts_storage_api_version: "1.1",
        		client_id: 'tradingview.com',
        		user_id: 'public_user_id',
            theme: "Dark",
        		timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      })
      this.tvWidget = tvWidget

    },
    destroyed() {
      if (this.tvWidget !== null) {
        this.tvWidget.remove();
        this.tvWidget = null;
      }
    },
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
            ]
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
