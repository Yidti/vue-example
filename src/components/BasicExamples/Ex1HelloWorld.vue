<script setup>
import { ref } from 'vue'
const message = ref('Hello World!')
</script>

<template>
    <p>Example 1:</p>
    <h1>{{ message }}</h1>
</template>