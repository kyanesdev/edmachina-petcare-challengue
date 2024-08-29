<template>
  <div class="card flex justify-center">
    <p-chart type="doughnut" :data="chartData" :options="chartOptions" />
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
            hoverBackgroundColor: [this.color, '#CCCCCC']
          }
        ]
      }
    },
    setChartOptions () {
      return {
        plugins: {
          legend: {
            display: true
          },
          doughnutInnerText: {
            espnVal: 'My Text'
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
.progress-circle {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
