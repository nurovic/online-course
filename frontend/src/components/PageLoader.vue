<script>
export default {

}
</script>

<template>
    <div class="template">

        <div class="loading-container">
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
    </div>
</template>

<style scoped>
.template {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    margin: 0;
}


.loading-container {
    animation: rotate 1.5s linear infinite;
    height: 50px;
    transform-origin: bottom center;
}

@keyframes rotate {
    to {
        transform: rotate(360deg);
    }
}

.circle {
    animation: grow 1.5s linear infinite;
    background-color: purple;
    border-radius: 50%;
    display: inline-block;
    margin: -10px;
    height: 40px;
    width: 40px;
    transform: scale(0);
}

.circle:nth-of-type(2) {
    animation-delay: .75s;
    background-color: palevioletred;
}

@keyframes grow {
    50% {
        transform: scale(1);
    }
}
</style>