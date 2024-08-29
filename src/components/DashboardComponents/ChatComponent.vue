<template>
  <div class="chat">
    <div v-for="(message, index) in chatMessages" :key="index" class="chat-message">
      <img :src="message.avatar" class="avatar" />
      <div class="message-content">
        <div class="message-header">
          <span>{{ message.name }}</span>
          <span class="timestamp">{{ message.timestamp }}</span>
        </div>
        <p class="textMessage">{{ message.text }}</p>
      </div>
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
          text: 'Luna has been scratching her ears...',
          timestamp: '15:56',
          avatar: require('@/assets/chat1.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.chat {
  max-height: 100%;
  overflow-y: auto;
}

.chat-message {
  display: flex;
  margin-bottom: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-content {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  text-align: start;
}

.message-header {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 5px;
}

.timestamp {
  color: gray;
}

.textMessage {
  margin: 0;
  text-align: start;
}
</style>
