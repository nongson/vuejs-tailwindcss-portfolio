<template>
    <div class="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
        <!-- About me counters -->
        <div
            class="font-general-regular container mx-auto py-20 block sm:flex sm:justify-between sm:items-center"
        >
            <!-- Years of experience counter -->
            <div class="mb-20 sm:mb-0">
                <counter
                    ref="counter"
                    :start-amount="0"
                    :end-amount="3"
                    :duration="1"
                    :autoinit="true"
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    aria-label="About Status Counter"
                    @finished="onCounterFinished"
                />
                <span
                    class="block text-md text-ternary-dark dark:text-ternary-light"
                >
                    {{ experienceTitle }}
                </span>
            </div>

            <!-- GitHub stars counter -->
            <div class="mb-20 sm:mb-0">
                <counter
                    ref="counter"
                    :start-amount="0"
                    :end-amount="0"
                    :duration="1"
                    suffix="k+"
                    :autoinit="true"
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    @finished="onCounterFinished"
                />
                <span
                    class="block text-md text-ternary-dark dark:text-ternary-light"
                    >{{ githubTitle }}</span
                >
            </div>

            <!-- Positive feedback counter -->
            <div class="mb-20 sm:mb-0">
                <counter
                    ref="counter"
                    :start-amount="0"
                    :end-amount="99"
                    :duration="1"
                    suffix="%"
                    :autoinit="true"
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    @finished="onCounterFinished"
                />
                <span
                    class="block text-md text-ternary-dark dark:text-ternary-light"
                >
                    {{ feedbackTitle }}
                </span>
            </div>

            <!-- Projects completed counter -->
            <div class="mb-20 sm:mb-0">
                <counter
                    ref="counter"
                    :start-amount="0"
                    :end-amount="3"
                    :duration="1"
                    :autoinit="true"
                    class="font-general-medium text-4xl font-bold text-secondary-dark dark:text-secondary-light mb-2"
                    @finished="onCounterFinished"
                />
                <span
                    class="block text-md text-ternary-dark dark:text-ternary-light"
                >
                    {{ projectsTitle }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import counter from 'vue3-autocounter'

export default {
    components: {
        counter,
    },
    data() {
        return {
            experienceTitle: 'Years of experience',
            githubTitle: 'Stars on GitHub',
            feedbackTitle: 'Positive feedback',
            projectsTitle: 'Projects completed',
        }
    },
    methods: {
        onCounterFinished() {
            console.log('Counting finished!')
        },
    },
}
</script>
