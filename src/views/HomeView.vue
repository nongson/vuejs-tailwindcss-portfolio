<script>
import AppBanner from '@/components/shared/AppBanner'
import ProjectsGrid from '../components/projects/ProjectsGrid.vue'
import CustomButton from '../components/reusable/CustomButton.vue'

export default {
    name: 'HomeView',
    components: {
        AppBanner,
        ProjectsGrid,
        CustomButton,
    },
}
</script>

<template>
    <div class="container mx-auto">
        <!-- Banner -->
        <AppBanner class="mb-5 sm:mb-8" />

        <!-- Projects -->
        <ProjectsGrid />

        <!-- Load more projects button -->
        <div class="mt-10 sm:mt-20 flex justify-center">
            <router-link
                to="/projects"
                class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                aria-label="More Projects"
            >
                <CustomButton title="More Projects" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>
