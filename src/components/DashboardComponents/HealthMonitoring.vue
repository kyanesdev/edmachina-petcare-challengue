<template>
  <div class="health-monitoring">
    <Card class="cardContent">
      <template #content>
        <div class="controls">
          <span><i class="mdi mdi-heart-pulse"></i>Stress Level</span>
          <span><i class="mdi mdi-pulse"></i>Pulse</span>
          <span><i class="mdi mdi-fire"> </i>Temperature</span>
          <span><i class="mdi mdi-weight"></i>Calories Burned</span>
        </div>
      </template>
    </Card>
    <p-chart type="line" :data="data" />
  </div>
</template>

<script>
import Chart from 'primevue/chart'
import Card from 'primevue/card'

export default {
  components: {
    'p-chart': Chart,
    Card
  },
  data () {
    return {
      data: {
        labels: ['September', 'October', 'November', 'December', 'January'],
        datasets: [
          {
            label: 'Quality of Sleep',
            data: [3, 5, 2, 6, 8],
            fill: true,
            borderColor: '#007bff'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.health-monitoring .controls {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.health-monitoring .controls i {
  font-size: 20px;
  color: #007bff;
}
.cardContent {
  margin: auto;
  border-radius: 5px;
  width: 90%;
  height: 6vh;
}

p-chart {
  width: 100%;
  height: 300px;
}

.controls span {
  font-size: 17px;
  color: #0B1C33;
  margin-top: -15px;
}

.controls span i {
  margin-right: 8px;
}
</style>
