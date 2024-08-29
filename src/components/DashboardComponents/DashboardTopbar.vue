<template>
  <div class="topbar">
    <p-inputText placeholder="Search..." class="searchBar" />
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
.searchBar {
  width: 60%;
}
.iconHelp {
  margin-left: 42vh;
}
.iconBell {
  margin-left: 1vh;
}
</style>
