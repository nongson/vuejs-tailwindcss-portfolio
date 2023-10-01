<script>
export default {
    props: ['projectImages'],
}
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
        <div
            v-for="projectImage in projectImages"
            :key="projectImage.id"
            class="mb-10 sm:mb-0 max-h-96"
        >
            <img
                :src="projectImage.img"
                class="rounded-xl cursor-pointer shadow-lg sm:shadow-none max-h-96"
                alt="{{ projectImage.title }}"
            />
        </div>
    </div>
</template>
