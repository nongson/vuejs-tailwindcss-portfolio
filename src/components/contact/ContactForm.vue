<script>
import CustomButton from '../reusable/CustomButton.vue'
import FormInput from '../reusable/FormInput.vue'
import FormTextarea from '../reusable/FormTextarea.vue'

export default { components: { CustomButton, FormInput, FormTextarea } }
</script>

<template>
    <div class="w-full md:w-1/2">
        <div
            class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
        >
            <p
                class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
            >
                Contact Form
            </p>
            <form action="#" class="font-general-regular space-y-7">
                <FormInput label="Full Name" input-identifier="name" />
                <FormInput
                    label="Email"
                    input-identifier="email"
                    input-type="email"
                />
                <FormInput label="Subject" input-identifier="subject" />
                <FormTextarea label="Message" textarea-identifier="message" />

                <div>
                    <CustomButton
                        title="Send Message"
                        class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
                        type="submit"
                        aria-label="Send Message"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
