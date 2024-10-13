<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <div class="nav-container">
      <div class="card">
        <router-link to="/basic-examples">Basic Examples</router-link>
      </div>
      <div class="card">
        <router-link to="/practical-examples">Practical Examples</router-link>
      </div>
    </div>
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
.app-container {
  display: flex;
  /* 使用 Flexbox 排版 */
  width: 100%;
}

.nav-container {
  display: flex;
  flex-direction: column;
  /* 使導航項目垂直排列 */
  margin: 2rem 0;
  gap: 1rem;
  /* 設定導航欄的寬度 */
  width: 200px;
  /* 導航欄固定寬度 */
}

.card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card a {
  color: #42b983;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
}

.card a:hover {
  text-decoration: underline;
}

.content-container {
  /* max-width: 1200px; */
  /* 最大寬度 */
  width: 100%;
  /* 寬度100% */
  margin: 0 auto;
  /* 自動左右邊距使其居中 */
  padding: 20px;
  /* 內邊距 */
}

@media (min-width: 1024px) {
  #app {
    display: block;
    /* 使用 block 或其他佈局 */
    /* 移除 grid-template-columns */
    padding: 0 2rem;
    /* 保留內邊距 */
  }
}
</style>
