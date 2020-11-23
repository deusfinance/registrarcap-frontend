<template>

    <div class="TVChartContainer" :id="containerId" />

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
        		fullscreen: true,
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
