<script>
import feather from 'feather-icons'
import CustomButton from './reusable/CustomButton.vue'
import FormInput from './reusable/FormInput.vue'
import FormTextarea from './reusable/FormTextarea.vue'

export default {
    components: { CustomButton, FormInput, FormTextarea },
    props: ['showModal', 'modal', 'categories'],
    data() {
        return {}
    },
    mounted() {
        feather.replace()
    },
    updated() {
        feather.replace()
    },
    methods: {},
}
</script>

<template>
    <transition name="fade">
        <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
            <!-- Modal body background as backdrop -->
            <div
                v-show="modal"
                class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
                @click="showModal()"
            ></div>
            <!-- Modal content -->
            <main
                class="flex flex-col items-center justify-center h-full w-full"
            >
                <transition name="fade-up-down">
                    <div
                        v-show="modal"
                        class="modal-wrapper flex items-center z-30"
                    >
                        <div
                            class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
                        >
                            <div
                                class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
                            >
                                <h5
                                    class="text-primary-dark dark:text-primary-light text-xl"
                                >
                                    What project are you looking for?
                                </h5>
                                <CustomButton
                                    class="px-4 text-primary-dark dark:text-primary-light"
                                    @click="showModal()"
                                >
                                    <i data-feather="x"></i>
                                </CustomButton>
                            </div>
                            <div class="modal-body p-5 w-full h-full">
                                <form class="max-w-xl m-4 text-left">
                                    <FormInput
                                        label="Full Name"
                                        input-identifier="name"
                                        class="mb-2"
                                    />
                                    <FormInput
                                        label="Email"
                                        input-identifier="email"
                                        input-type="email"
                                    />

                                    <div class="mt-6 mb-4">
                                        <label
                                            class="block mb-2 text-lg text-primary-dark dark:text-primary-light"
                                            for="project"
                                            >Project Type</label
                                        >
                                        <select
                                            id="project"
                                            class="w-full px-5 py-3 border-1 border-gray-200 dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                                            name="project"
                                            type="text"
                                            required=""
                                            aria-label="Project Category"
                                        >
                                            <option
                                                v-for="category in categories"
                                                :key="category.id"
                                                :value="category.value"
                                            >
                                                {{ category.name }}
                                            </option>
                                        </select>
                                    </div>

                                    <FormTextarea
                                        label="Details"
                                        textarea-identifier="details"
                                    />

                                    <div class="mt-7 pb-4 sm:pb-1">
                                        <CustomButton
                                            title="Send Request"
                                            class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                                            type="submit"
                                            aria-label="Submit Request"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div
                                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
                            >
                                <CustomButton
                                    title="Close"
                                    class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                                    aria-label="Close Modal"
                                    @click="showModal()"
                                />
                            </div>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </transition>
</template>

<style scoped>
.modal-body {
    max-height: 570px;
}

.bg-gray-800-opacity {
    background-color: #2d374850;
}

@media screen and (max-width: 768px) {
    .modal-body {
        max-height: 400px;
    }
}

.fade-up-down-enter-active {
    transition: all 0.3s ease;
}

.fade-up-down-leave-active {
    transition: all 0.3s ease;
}

.fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
}

.fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
}

.fade-enter-active {
    transition: opacity 0.3s;
}

.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
