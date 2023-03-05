<template>
    <div class="date">
        {{ dates }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default{
        name: 'the-date',
        computed: {
            ...mapState({
                dates: state => state.dates,
            })
        }
    }
</script>


<style lang="scss">
    
</style>