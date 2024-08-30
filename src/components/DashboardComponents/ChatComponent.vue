<template>
  <div class="chat">
    <div v-for="(message, index) in chatMessages" :key="index" class="chat-message">
      <div class="avatar-wrapper">
        <img :src="message.avatar" class="avatar" />
        <span :class="`status-dot ${message.online ? 'online' : 'offline'}`"></span>
      </div>
      <div class="message-content">
        <div class="message-header">
          <span class="name">{{ message.name }}</span>
          <span class="timestamp">{{ message.timestamp }}</span>
        </div>
        <p class="textMessage">{{ message.text }}</p>
      </div>
      <span v-if="message.badge" class="badge">{{ message.badge }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chatMessages: [
        {
          name: 'Helen Brooks',
          text: 'Luna has been scratching her ears a lot lately and shaking her head...',
          timestamp: '15:56',
          avatar: require('@/assets/helen.png'),
          online: true
        },
        {
          name: 'Kathryn Murphy',
          text: 'The best way to treat an ear infection is to visit your local vet clinic and...',
          timestamp: 'Wed',
          avatar: require('@/assets/kathryn.png'),
          badge: 2,
          online: true
        },
        {
          name: 'James Grey',
          text: 'You should follow the instructions on the ear drops label, but usually...',
          timestamp: 'Tue',
          avatar: require('@/assets/james.png'),
          online: false
        },
        {
          name: 'Jim Brown',
          text: 'Hi, I have a question about my cat.',
          timestamp: 'Tue',
          avatar: require('@/assets/jim.png'),
          online: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.chat {
  padding: 0;
}

.chat-message {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
}

.avatar-wrapper {
  position: relative;
  margin-right: 12px;
}

.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  border: 2px solid white;
}

.status-dot.online {
  background-color: #27ae60;
}

.status-dot.offline {
  background-color: #e74c3c;
}

.message-content {
  flex: 1;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 8px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

.name {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
}

.timestamp {
  font-size: 12px;
  color: #999999;
}

.textMessage {
  font-size: 14px;
  color: #666666;
  margin: 0;
  text-align: left;
}

.badge {
  background-color: #ff4d4f;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  padding: 2px 8px;
  position: absolute;
  right: 0;
  top: 2vh;
}
</style>
