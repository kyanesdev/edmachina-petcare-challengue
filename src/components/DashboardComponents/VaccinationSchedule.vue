<template>
  <p-dataTable :value="vaccinations">
    <p-column field="name" header="Name"></p-column>
    <p-column field="type" header="Type" :body="typeTemplate"></p-column>
    <p-column field="date" header="Date"></p-column>
    <p-column field="veterinarian" header="Veterinarian" :body="vetTemplate"></p-column>
  </p-dataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

export default {
  components: {
    'p-dataTable': DataTable,
    'p-column': Column
  },
  data () {
    return {
      vaccinations: [
        { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023', veterinarian: 'Find veterinarian' },
        { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey' }
        // Add more rows as needed
      ]
    }
  },
  methods: {
    typeTemplate (rowData) {
      return `<span class="status-${rowData.type.toLowerCase()}">${rowData.type}</span>`
    },
    vetTemplate (rowData) {
      if (rowData.veterinarian === 'Find veterinarian') {
        return `<button class="find-vet-button">${rowData.veterinarian}</button>`
      }
      return rowData.veterinarian
    }
  }
}
</script>

<style scoped>
.status-overdue {
  background-color: red;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}
.status-noncore {
  background-color: orange;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}
.find-vet-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
}
</style>
