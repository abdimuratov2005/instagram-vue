<template>
    <div class="indecator">
        <div class="indecator__container">
            <div id="indecator"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'the-homeIndecator'
    }
</script>

<style lang="scss">
    .indecator {
        &__container {
            padding: 21px 128px 8px;
            cursor: grab;
        }
    }

    #indecator{
        background: #000000;
        border-radius: 100px;
        width: 134px;
        height: 5px;
    }
</style>