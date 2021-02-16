<template>
    <div class="App">
        <h1>application</h1>
        <nav class="App-header">
            <ul>
                <li>
                    <router-link :to="{ name: 'home'}">home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'sketches'}">sketches</router-link>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            message: "Learn Vue"
        };
    }
};
</script>

<style>
</style>
