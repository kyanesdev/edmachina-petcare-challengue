<template>
  <div class="topbar">
    <span class="relative">
      <i class="mdi mdi-magnify iconBar" ></i>
      <p-inputText v-model="value1" placeholder="Search" class="searchBar" />
    </span>
    <p-badge value="2" severity="danger" class="mdi mdi-help-circle-outline iconHelp" />
    <p-badge value="2" severity="danger" class="mdi mdi-bell-outline iconBell" />
    <p-button label="Add widget" class="ml-auto" />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import badge from 'primevue/badge'

export default {
  components: {
    'p-inputText': InputText,
    'p-button': Button,
    'p-badge': badge
  },
  data () {
    return {
      value1: ''
    }
  }
}
</script>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f4f6f8;
}
.ml-auto {
  margin-left: auto;
}
.iconHelp {
  margin-left: 39vh;
}
.iconBell {
  margin-left: 2vh;
}
.relative {
  position: relative;
}
.iconBar {
  position: absolute;
  top: 50%;
  margin-top: -0.55rem;
  left: -2.1rem;
  width: 10vh;
  color: #9e9e9e;
}
.searchBar {
  padding-left: 25px;
  width: 90vh;
}
</style>
