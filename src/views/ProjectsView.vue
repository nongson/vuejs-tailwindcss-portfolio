<script>
import ProjectsGrid from '../components/projects/ProjectsGrid.vue'

export default {
    name: 'ProjectsView',
    components: {
        ProjectsGrid,
    },
}
</script>

<template>
    <div class="container mx-auto">
        <ProjectsGrid />
    </div>
</template>

<style scoped></style>
