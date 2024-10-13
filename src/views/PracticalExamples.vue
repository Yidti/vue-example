<script setup>
import Ex1Markdown from '@/components/PracticalExamples/Ex1Markdown.vue';
import Ex2FetchingData from '@/components/PracticalExamples/Ex2FetchingData.vue';
import Ex3Grid from '@/components/PracticalExamples/Ex3Grid.vue';
import Ex4Tree from '@/components/PracticalExamples/Ex4Tree.vue';
// import Ball from '@/components/PracticalExamples/Ball.vue';
import Ex5SVG from '@/components/PracticalExamples/Ex5SVG.vue';
import Ex6Modal from '@/components/PracticalExamples/Ex6Modal.vue';
import Ex7ListTransition from '@/components/PracticalExamples/Ex7ListTransition.vue';
import Ex8Todomvc from '@/components/PracticalExamples/Ex8Todomvc.vue';
</script>

<template>
    <div>
        <h1>Practical Examples</h1>
        <span class="spacer">
            <Ex1Markdown />
        </span>
        <hr />
        <span class="spacer">
            <Ex2FetchingData />
        </span>
        <hr />
        <span class="spacer">
            <Ex3Grid />
        </span>
        <hr />
        <span class="spacer">
            <Ex4Tree />
        </span>
        <hr />
        <span class="spacer">
            <Ex5SVG />
        </span>
        <!-- <Ball /> -->
        <hr />
        <span class="spacer">
            <Ex6Modal />
        </span>
        <hr />
        <span class="spacer">
            <Ex7ListTransition />
        </span>
        <hr />

        <span class="spacer todomvc-container">
            <Ex8Todomvc />
        </span>

    </div>
</template>

<style scoped>
.spacer {
    display: block;
    /* 使 span 元素成為塊級元素，這樣才能應用上下間隔 */
    margin: 20px 0;
    /* 設置上下間隔為20px，左右間隔為0 */
    padding: 20px;

    /* 測試看邊界 */
    /* border: 1px solid red; */

    /* overflow: hidden; */
    /* 防止子元素溢出 */
}

.todomvc-container {
    /* height: 500px; */
    /* 或更多，根據需要調整 */
    display: flex;
    flex-direction: column;
}
</style>