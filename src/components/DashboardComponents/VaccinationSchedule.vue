<template>
  <p-dataTable :value="vaccinations" class="vaccination-table">
    <p-column field="name" header="Name">
      <template #body="slotProps">
        <span v-if="slotProps.data.name" class="nameDateVeterinarian">
          {{ slotProps.data.name }}
        </span>
      </template>
    </p-column>
    <p-column field="type" header="Type">
      <template #body="slotProps">
        <span :class="`status-${slotProps.data.type.toLowerCase()}`">
          {{ slotProps.data.type }}
        </span>
      </template>
    </p-column>
    <p-column field="date" header="Date" class="nameDateVeterinarian">
      <template #body="slotProps">
        <span v-if="slotProps.data.date" class="nameDateVeterinarian">
          {{ slotProps.data.date }}
        </span>
      </template>
    </p-column>
    <p-column field="veterinarian" header="Veterinarian">
      <template #body="slotProps">
        <p-button v-if="slotProps.data.veterinarian === 'Find veterinarian'" class="find-vet-button">
          {{ slotProps.data.veterinarian }}
        </p-button>
        <span v-else class="find-vet-button">
          {{ slotProps.data.veterinarian }}
        </span>
      </template>
    </p-column>
  </p-dataTable>
</template>

<script>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'

export default {
  components: {
    'p-dataTable': DataTable,
    'p-column': Column,
    'p-button': Button
  },
  data () {
    return {
      vaccinations: [
        { name: 'Rabies', type: 'Overdue', date: '01 Dec 2023', veterinarian: 'Find veterinarian' },
        { name: 'Bordetella', type: 'Noncore', date: '11 Dec 2024', veterinarian: 'James Grey' },
        { name: 'Distemper', type: 'Core', date: '27 Jun 2024', veterinarian: 'Jim Brown' },
        { name: 'Calicivirus', type: 'Core', date: '16 Sep 2024', veterinarian: 'Helen Brooks' }
      ]
    }
  }
}
</script>

<style scoped>
.vaccination-table {
  border-radius: 8px;
  border: 1px solid #d9e2ef;
  padding: 16px;
  background-color: #ffffff;
}

.status-overdue {
  background-color: #ffccd5;
  color: #d80027;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}

.status-noncore {
  background-color: #ffecd1;
  color: #d17d04;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}

.status-core {
  background-color: #e4f7e7;
  color: #2a9d8f;
  padding: 4px 20px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
}

.find-vet-button {
  background-color: #d9d9d9;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

.find-vet-button:hover {
  background-color: #007bff;
  color: white;
}

.nameDateVeterinarian {
  font-size: 14px;
  font-weight: 600;
  color: #0b1c33;
}
</style>
