<script>
export default {
    setup() {
        return {
            bios: [
                {
                    id: 1,
                    bio:
                        'Hello there! My name is Son, and I am a Front End Engineer based in sunny Hanoi. 🌞 With a burning passion for all things web development, I find immense joy in crafting beautiful and engaging user interfaces. I thrive on the challenges that frontend development presents and constantly seek innovative solutions to deliver exceptional user experiences.\n' +
                        '\n' +
                        'As a dedicated and enthusiastic developer, I am always eager to explore new technologies and frameworks. Vue.js has captured my heart with its simplicity and versatility, and I have honed my skills in this powerful frontend framework. I take great pride in my ability to translate design concepts into pixel-perfect, responsive websites and applications.\n' +
                        '\n' +
                        'Beyond coding, I am an advocate for open source projects and regularly contribute to the developer community. I believe in the power of collaboration and enjoy working alongside fellow developers to create impactful solutions. The web platform is constantly evolving, and I am committed to staying up-to-date with the latest trends and best practices to deliver cutting-edge solutions.',
                },
                {
                    id: 2,
                    bio:
                        'In addition to my technical expertise, I am a strong communicator and thrive in collaborative environments. I value teamwork and believe that effective collaboration leads to the best outcomes. I am excited about the incredible potential of frontend development and the opportunities it presents to create meaningful connections between users and technology.\n' +
                        '\n' +
                        "If you're looking for a passionate and dedicated Front End Engineer who loves to code and is committed to delivering exceptional user experiences, then I would be thrilled to be part of your team. Let's bring your vision to life and make a positive impact together!",
                },
            ],
        }
    },
}
</script>

<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img
                src="@/assets/images/profile.jpeg"
                class="rounded-xl w-96"
                alt=""
            />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left">
            <p
                v-for="bio in bios"
                :key="bio.id"
                class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            >
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>
