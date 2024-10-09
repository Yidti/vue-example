<!--
An SVG graph
-->

<script setup>
import PolyGraph from './PolyGraph.vue'
import { ref, reactive } from 'vue'

const newLabel = ref('')
const stats = reactive([
    { label: 'A', value: 100 },
    { label: 'B', value: 100 },
    { label: 'C', value: 100 },
    { label: 'D', value: 100 },
    { label: 'E', value: 100 },
    { label: 'F', value: 100 }
])

function add(e) {
    e.preventDefault()
    if (!newLabel.value) return
    stats.push({
        label: newLabel.value,
        value: 100
    })
    newLabel.value = ''
}

function remove(stat) {
    if (stats.length > 3) {
        stats.splice(stats.indexOf(stat), 1)
    } else {
        alert("Can't delete more!")
    }
}
</script>

<template>
    <div class="container">
        <div class="column">
            <p>Example 5:</p>
            <svg width="200" height="200">
                <PolyGraph :stats="stats"></PolyGraph>
            </svg>

            <!-- controls -->
            <div v-for="stat in stats">
                <label>{{ stat.label }}</label>
                <input type="range" v-model="stat.value" min="0" max="100">
                <span>{{ stat.value }}</span>
                <button @click="remove(stat)" class="remove">X</button>
            </div>

            <form id="add">
                <input name="newlabel" v-model="newLabel">
                <button @click="add">Add a Stat</button>
            </form>
        </div>

        <div class="column">
            <pre id="raw">{{ stats }}</pre>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    /* 設置容器為彈性盒 */
    justify-content: space-between;
    /* 在兩列之間分配空間 */
    padding: 10px;
    /* 加入內邊距 */
}

.column {
    flex: 1;
    /* 使每一列都可以佔據相同的空間 */
    margin: 10px;
    /* 每列添加間隙 */
}

polygon {
    fill: #42b983;
    opacity: 0.75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {

    margin-left: auto;
    /* 自動邊距將其推到右邊 */
    margin-top: 10px;
    /* 上邊距 */
    max-width: 300px;
    /* 限制最大寬度 */
}

pre {
    max-width: 100%;
    /* 限制最大寬度 */
    overflow: auto;
    /* 超出時顯示滾動條 */
    margin: 10px 0;
    /* 調整上下邊距 */
    padding: 10px;
    /* 增加內邊距 */
    background-color: #f9f9f9;
    /* 增加背景色 */
    border: 1px solid #ccc;
    /* 增加邊框 */
}
</style>