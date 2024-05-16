<template>
    <div>
        <h1>Score: {{ score.wins }} wins | {{ score.losses }} losses</h1>
    </div>
</template>

<script>
    export default {
        name: 'ScoreBoard',
        props: {
            score: Object,
        }
    }
</script>

<style scoped>

</style>