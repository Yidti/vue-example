<script setup>
import { ref } from 'vue'

const message = ref('Hello World')
function reverseMessage() {
    message.value = message.value.split('').reverse().join('')
}
function notify() {
    alert('navigation was prevented.')
}
</script>

<template>

    <p>Example 2:</p>
    <h1>{{ message }}</h1>
    <button @click="reverseMessage">Reverse Message</button>
    <button @click="message += '!'">Append "!"</button>
    <a href="https://vuejs.org" @click.prevent="notify">
        A link with e.preventDefault()
    </a>
</template>

<style scoped>
button,
a {
    display: block;
    margin-bottom: 1em;
}
</style>