<template>
  <aside class="sidebar">
    <div class="logo-section">
      <i class="mdi mdi-cat logo-icon"></i>
      <span class="logo-text">PetCare</span>
    </div>
    <p-menu :model="items" class="menu">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <p-badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        </a>
      </template>
    </p-menu>
  </aside>
</template>

<script>
import Menu from 'primevue/menu'
import Badge from 'primevue/badge'

export default {
  components: {
    'p-menu': Menu,
    'p-badge': Badge
  },
  data () {
    return {
      items: [
        {
          label: 'Menu',
          items: [
            {
              label: 'Dashboard',
              icon: 'mdi mdi-view-dashboard-outline',
              command: () => this.$router.push('/building')
            },
            {
              label: 'Pet profile',
              icon: 'mdi mdi-paw-outline',
              command: () => this.$router.push('/building')
            }
          ]
        },
        {
          separator: true
        },
        {
          label: 'Analytics',
          items: [
            {
              label: 'Health monitoring',
              icon: 'mdi mdi-heart-pulse',
              command: () => this.$router.push('/building')
            },
            {
              label: 'Vaccination schedule',
              icon: 'mdi mdi-needle',
              command: () => this.$router.push('/building')
            }
          ]
        },
        {
          separator: true
        },
        {
          label: 'Schedule',
          items: [
            {
              label: 'Chat',
              icon: 'mdi mdi-chat',
              command: () => this.$router.push('/building')
            },
            {
              label: 'Appointments',
              icon: 'mdi mdi-calendar-clock',
              command: () => this.$router.push('/building'),
              badge: 2
            }
          ]
        },
        {
          separator: true
        },
        {
          label: 'Help',
          items: [
            {
              label: 'Settings',
              icon: 'mdi mdi-cog',
              command: () => this.$router.push('/building')
            },
            {
              label: 'Documentation',
              icon: 'mdi mdi-file-document',
              command: () => this.$router.push('/building')
            }
          ]
        },
        {
          separator: true
        },
        {
          label: 'Logout',
          icon: 'mdi mdi-logout',
          command: () => this.logout()
        }
      ]
    }
  },
  methods: {
    async logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #f8f9fa;
  padding: 20px;
  border-right: 1px solid #e5e7eb;
  height: 100vh;
}

.logo-section {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 24px;
  color: #1d4ed8;
  margin-right: 10px;
}

.logo-text {
  font-size: 18px;
  font-weight: bold;
  color: #0B1C33;
}

.menu {
  height: 100%;
}

.menu .p-menuitem-link {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.menu .p-menuitem-link:hover {
  background-color: #1d4ed8;
}

.menu .p-menuitem-link .mdi {
  font-size: 20px;
  margin-right: 10px;
  color: #1d4ed8;
}

.menu .p-menuitem-link .p-menuitem-text {
  color: #1d4ed8;
}

.menu .p-menuitem-link.active {
  background-color: #1d4ed8;
  color: #1d4ed8;
}

.menu .p-menuitem-link.active .mdi {
  color: #1d4ed8;
}

.custom-chat-icon {
  display: flex;
  align-items: center;
}

.chat-image {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
}

.separator {
  height: 1px;
  background-color: #e5e7eb;
  margin: 10px 0;
}

.menu .p-menuitem-link.logout {
  color: #E53761 !important;
}

.menu .p-menuitem-link.logout .mdi {
  color: #E53761 !important;
}
</style>
