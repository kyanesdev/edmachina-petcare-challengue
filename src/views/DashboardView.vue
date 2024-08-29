<template>
  <div class="dashboard">
    <DashboardSidebar />
    <div class="main-content">
      <DashboardTopbar />
      <div class="widgets">
        <Card class="percentagesContainer">
          <template #content>
            <div>
              <p class="titleDonuts" style="margin-bottom: -15px;">ACTIVITY</p>
              <select class="selects">
                <option value="1">Today</option>
              </select>
            </div>
            <div>
              <PieCharts :value="25" color="#E53761" />
            </div>
          </template>
        </Card>

        <Card class="percentagesContainer">
          <template #content>
            <div>
              <p class="titleDonuts" style="margin-bottom: -15px;">SLEEP</p>
              <select class="selects">
                <option value="1">Weekly</option>
              </select>
              <PieCharts :value="79" color="#27A468" />
            </div>
          </template>
        </Card>

        <Card class="percentagesContainer">
          <template #content>
            <div>
              <p class="titleDonuts" style="margin-bottom: -15px;">WELNESS</p>
              <select class="selects">
                <option value="1">Weekly</option>
              </select>
              <PieCharts :value="52" color="#F2A735" />
            </div>
          </template>
        </Card>
      </div>

      <div class="bottom-row">
        <Card class="cardHealth">
          <template #content>
            <div class="containersSelects">
              <p class="titleHealth">HEALTH MONITORING</p>
              <select class="selectHealth">
                <option value="1">Monthly</option>
              </select>
            </div>
            <div class="healthmonitoringContainer">
              <HealthMonitoring />
            </div>
          </template>
        </Card>

        <div class="right-column">
          <Card class="cardVaccination">
            <template #content>
              <div class="containersSelects">
                <p class="titleHealth">VACCINATION SCHEDULE</p>
                <i class="mdi mdi-magnify" style="font-size: 24px;margin-right: -36vh;"></i>
                <select class="selectVaccination">
                  <option value="1">By type</option>
                </select>
              </div>
              <div class="healthmonitoringContainer">
                <VaccinationSchedule />
              </div>
            </template>
          </Card>

          <Card class="cardChat">
            <template #content>
              <div class="containersSelects">
                <p class="titleHealth">CHAT</p>
              </div>
              <div class="healthmonitoringContainer">
                <ChatComponent />
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '../components/DashboardComponents/DashboardSidebar.vue'
import DashboardTopbar from '../components/DashboardComponents/DashboardTopbar.vue'
import PieCharts from '../components/DashboardComponents/PieCharts.vue'
import HealthMonitoring from '../components/DashboardComponents/HealthMonitoring.vue'
import VaccinationSchedule from '../components/DashboardComponents/VaccinationSchedule.vue'
import ChatComponent from '../components/DashboardComponents/ChatComponent.vue'
import Card from 'primevue/card'

export default {
  components: {
    DashboardSidebar,
    DashboardTopbar,
    PieCharts,
    HealthMonitoring,
    VaccinationSchedule,
    ChatComponent,
    Card
  }
}
</script>

<style scoped>
.dashboard {
  display: flex;
  background-color: #f8f9fa;
}

.main-content {
  flex: 1;
  padding: 20px;
  margin-right: 3%;
}

.widgets {
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  width: 50%;
}

.percentagesContainer {
  width: 30%;
  height: 28vh;
}

.titleDonuts {
  text-align: start;
  font-size: 15px;
  margin-top: -20px;
  font-weight: 500;
  color: #0B1C33;
}

.selects {
  background-color: #FEFEFE;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  margin-left: 13vh;
  border-color: #DAE3F8;
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  appearance: none;
  outline: none;
}

.selects::after {
  content: '\25BC';
  position: absolute;
  right: 10px;
  pointer-events: none;
}

.bottom-row {
  display: flex;
  gap: 20px;
}

.cardHealth {
  width: 75%;
}

.cardVaccination {
  width: 100%;
  margin-top: -40%;
}

.cardChat{
  width: 100%;
  height: 50vh;
}

.healthmonitoringContainer {
  width: 100%;
  background-color: #ffffff;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
}

.containersSelects {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.titleHealth {
  font-size: 15px;
  font-weight: 500;
  color: #0B1C33;
}

.selectHealth {
  background-color: #FEFEFE;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  border-color: #DAE3F8;
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  appearance: none;
  outline: none;
}

.selectVaccination{
  background-color: #FEFEFE;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  border-color: #DAE3F8;
  padding: 6px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  appearance: none;
  outline: none;
}

</style>
