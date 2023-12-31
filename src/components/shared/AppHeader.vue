<script>
import ThemeSwitcher from '../ThemeSwitcher'
import HireMeModal from '../HireMeModal.vue'
import feather from 'feather-icons'
import AppHeaderLinks from './AppHeaderLinks.vue'
import CustomButton from '../reusable/CustomButton.vue'

export default {
    components: {
        ThemeSwitcher,
        HireMeModal,
        AppHeaderLinks,
        CustomButton,
    },
    data() {
        return {
            isOpen: false,
            theme: '',
            modal: false,
            categories: [
                {
                    id: 1,
                    value: 'web',
                    name: 'Web Application',
                },
                {
                    id: 2,
                    value: 'mobile',
                    name: 'Mobile Application',
                },
                {
                    id: 3,
                    value: 'ui-ux',
                    name: 'UI/UX Design',
                },
                {
                    id: 4,
                    value: 'branding',
                    name: 'Branding & Anim',
                },
            ],
        }
    },

    created() {
        this.theme = localStorage.getItem('theme') || 'light'
    },
    mounted() {
        feather.replace()
        this.theme = localStorage.getItem('theme') || 'light'
    },
    updated() {
        feather.replace()
    },
    methods: {
        updateTheme(theme) {
            this.theme = theme
        },
        showModal() {
            if (this.modal) {
                // Stop screen scrolling
                document
                    .getElementsByTagName('html')[0]
                    .classList.remove('overflow-y-hidden')
                this.modal = false
            } else {
                document
                    .getElementsByTagName('html')[0]
                    .classList.add('overflow-y-hidden')
                this.modal = true
            }
        },
    },
}
</script>

<template>
    <nav id="nav" class="sm:container sm:mx-auto">
        <!-- Header start -->
        <div
            class="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center my-6"
        >
            <!-- Header menu links and small screen hamburger menu -->
            <div class="flex justify-between items-center px-4 sm:px-0">
                <!-- Header logos -->
                <div>
                    <router-link to="/"
                        ><img
                            v-if="theme === 'light'"
                            src="@/assets/images/logo-no-background.svg"
                            class="w-36"
                            alt="Dark Logo"
                        />
                        <img
                            v-else
                            src="@/assets/images/logo-no-background.svg"
                            class="w-36"
                            alt="Light Logo"
                        />
                    </router-link>
                </div>

                <!-- Theme switcher small screen -->
                <ThemeSwitcher
                    :theme="theme"
                    class="block sm:hidden bg-ternary-light dark:bg-ternary-dark hover:bg-hover-light dark:hover:bg-hover-dark hover:shadow-sm px-2.5 py-2 rounded-lg"
                    @themeChanged="updateTheme"
                />

                <!-- Small screen hamburger menu -->
                <div class="sm:hidden">
                    <CustomButton
                        type="button"
                        class="focus:outline-none"
                        aria-label="Hamburger Menu"
                        @click="isOpen = !isOpen"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                        >
                            <path
                                v-if="isOpen"
                                fill-rule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                clip-rule="evenodd"
                            ></path>
                            <path
                                v-if="!isOpen"
                                fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            ></path>
                        </svg>
                    </CustomButton>
                </div>
            </div>

            <!-- Header links -->
            <AppHeaderLinks :show-modal="showModal" :is-open="isOpen" />

            <!-- Header right section CustomButtons -->
            <div
                class="hidden sm:flex justify-between items-center flex-col md:flex-row"
            >
                <!-- Hire me CustomButton -->
                <div class="hidden md:block">
                    <CustomButton
                        title="Hire Me"
                        class="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                        aria-label="Hire Me Button"
                        @click="showModal()"
                    />
                </div>

                <!-- Theme switcher large screen -->
                <ThemeSwitcher
                    :theme="theme"
                    class="ml-8 bg-primary-light dark:bg-ternary-dark px-3 py-2 shadow-sm rounded-xl cursor-pointer"
                    @themeChanged="updateTheme"
                />
            </div>
        </div>

        <!-- Hire me modal -->
        <HireMeModal
            :show-modal="showModal"
            :modal="modal"
            :categories="categories"
            aria-modal="Hire Me Modal"
        />
    </nav>
</template>

<style scoped>
#nav a.router-link-exact-active {
    @apply text-indigo-700;
    @apply dark:text-indigo-400;
    @apply font-medium;
}
</style>
