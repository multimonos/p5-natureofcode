<template>
    <div>
        <h1>sketches</h1>
        <ul>
            <li v-for="id in sketchIds">
                <router-link :to="{ name: 'sketches', params:{id: id}}">{{ id }}</router-link>
            </li>
        </ul>

        <sketch
            v-if="sketch"
            :sketch="sketch"
            :key="key"
        ></sketch>
    </div>
</template>

<script>
import sketches from "../config/sketches"
import SketchService from "../lib/SketchService";
import Sketch from "../components/Sketch.vue";

//
// keep in mind a sketch could ( in future ) be a complex vue component, so, should
// be able to load those in easily as well
//
export default {
    name: "SketchLoader",

    components: {
        Sketch,
    },

    data() {
        return {
            sketchId: null,
            sketchFn: null,
            svc: SketchService(sketches),
        }
    },

    created() {
        this.update(this.$route.params.id)
        this.$watch(() => this.$route.params, (toParams, previousParams) => {
                this.update(toParams.id)
            }
        )
    },

    methods: {
        update(id) {
            this.id = id
            this.sketch = null

            if (this.svc.has(id)) {
                this.sketch = this.svc.get(id) // returns a function
            }
        }
    },

    computed: {

        id: { // to ensure setting id is reactive
            get() { return this.sketchId },
            set(id) { this.sketchId = id }
        },

        sketch: {
            get() { return this.sketchFn },
            set(fn) { this.sketchFn = fn }
        },

        key() { // to ensure re-render of Sketch component
            return ["sketch", this.id].join('-')
        },

        sketchIds() {
            return this.svc.ids()
        }
    }


}
</script>

<style scoped>

</style>