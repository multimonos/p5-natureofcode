<template>
    <div>
        <div id="sketch" ref="sketch" class="sketch"></div>
    </div>
</template>

<script>
import p5 from "p5"

export default {
    name: "Sketch",

    props: {
        sketch: {
            type: Function,
        }
    },

    mounted() {
        this.load(this.sketch, document.getElementById("sketch"))
    },

    methods: {
        load(sketchFn, domElement) {
            new p5(sketchFn, domElement)
        },

    },
}
</script>

<style scoped>
</style>