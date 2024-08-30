<template>
  <div class="profile-pictures">
    <img v-for="(src, index) in images" :key="index" :src="require('@/assets/' + src)" class="profile-picture" alt="Profile Image">
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: ['james.png', 'kathryn.png', 'helen.png']
    }
  }
}
</script>

<style scoped>
.profile-pictures {
  display: flex;
  align-items: center;
}

.profile-picture {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: -8px;
  border: 2px solid #f8f9fa;
}
</style>
