<template>
    <div id="app">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle class="ball" cx="100" cy="100" r="20" fill="red" />
        </svg>
    </div>
</template>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.ball {
    animation: bounce 0.5s ease-in-out infinite alternate;
}

@keyframes bounce {
    0% {
        cy: 180;
    }

    100% {
        cy: 100;
    }
}
</style>

<script>
export default {
    name: 'App',
};
</script>