<template>
  <div class="card flex justify-center position-relative">
    <p-chart type="doughnut" :data="chartData" :options="chartOptions" />
    <span class="chart-value">{{ value }}%</span>
  </div>
</template>

<script>
import Chart from 'primevue/chart'

export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      chartData: null,
      chartOptions: null
    }
  },
  mounted () {
    this.chartData = this.setChartData()
    this.chartOptions = this.setChartOptions()
  },
  methods: {
    setChartData () {
      return {
        labels: [],
        datasets: [
          {
            data: [this.value, 100 - this.value],
            backgroundColor: [this.color, '#E0E0E0'],
            hoverBackgroundColor: [this.color, '#CCCCCC'],
            borderWidth: 0
          }
        ]
      }
    },
    setChartOptions () {
      return {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        },
        cutout: '80%'
      }
    }
  },
  components: {
    'p-chart': Chart
  }
}
</script>

<style scoped>
.position-relative {
  position: relative;
}

.chart-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
}
</style>
