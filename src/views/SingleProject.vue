<script>
import feather from 'feather-icons'
import ProjectHeader from '../components/projects/ProjectHeader.vue'
import ProjectGallery from '../components/projects/ProjectGallery.vue'
import ProjectInfo from '../components/projects/ProjectInfo.vue'
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue'

export default {
    name: 'ProjectDetails',
    components: {
        ProjectHeader,
        ProjectGallery,
        ProjectInfo,
        ProjectRelatedProjects,
    },
    data: () => {
        return {
            singleProjectHeader: {
                singleProjectTitle: 'Castory Project',
                singleProjectDate: 'Jul 26, 2022',
                singleProjectTag: 'UI / Frontend',
            },
            projectImages: [
                {
                    id: 1,
                    title: 'Kabul Project Management UI',
                    img: require('@/assets/images/web-project/castory/web-project-1.png'),
                },
                {
                    id: 2,
                    title: 'Kabul Project Management UI',
                    img: require('@/assets/images/web-project/castory/web-project-2.png'),
                },
                {
                    id: 3,
                    title: 'Kabul Project Management UI',
                    img: require('@/assets/images/web-project/castory/web-project-mobile.png'),
                },
            ],
            projectInfo: {
                clientHeading: 'About Client',
                companyInfos: [
                    {
                        id: 1,
                        title: 'Name',
                        details: 'Castory Project Management',
                    },
                    {
                        id: 2,
                        title: 'Services',
                        details: 'UI Design & Frontend Development',
                    },
                    {
                        id: 3,
                        title: 'Website',
                        details: 'castory.com',
                    },
                    {
                        id: 4,
                        title: 'Phone',
                        details: '0964739515',
                    },
                ],
                objectivesHeading: 'Objective',
                objectivesDetails: '',
                technologies: [
                    {
                        title: 'Tools & Technologies',
                        techs: [
                            'HTML',
                            'CSS',
                            'JavaScript',
                            'Vue.js',
                            'Vuetify',
                            'Figma',
                        ],
                    },
                ],
                projectDetailsHeading: 'Challenge',
                projectDetails: [
                    {
                        id: 1,
                        details:
                            'Xây dựng Giao diện Người dùng Tương tác: Sử dụng Vue.js để phát triển giao diện người dùng tương tác đòi hỏi kiến thức sâu về Vue.js, bao gồm việc quản lý trạng thái ứng dụng và tương tác người dùng. Tôi đã phải giải quyết việc tạo các thành phần Vue.js động và cập nhật chúng dựa trên hành vi người dùng.',
                    },
                    {
                        id: 2,
                        details:
                            'Tối ưu hóa Hiệu suất: Đảm bảo ứng dụng hoạt động mượt mà và nhanh chóng là một thách thức quan trọng. Tôi đã phải tối ưu hóa mã nguồn và sử dụng các tiện ích của Vue.js để cải thiện hiệu suất của ứng dụng, bao gồm cả việc tải dữ liệu bất đồng bộ.',
                    },
                    {
                        id: 3,
                        details:
                            'Tích hợp Với Vuetify: Vuetify là một thư viện giao diện người dùng dựa trên Material Design. Tôi đã phải tương tác chặt chẽ với Vuetify để sử dụng các thành phần và tiện ích có sẵn. Việc tích hợp Vuetify một cách hiệu quả và tuân thủ thiết kế là một thách thức.',
                    },
                    {
                        id: 4,
                        details:
                            'Đảm bảo Tương thích Trình duyệt: Một trong những thách thức quan trọng khác là đảm bảo ứng dụng hoạt động trên nhiều trình duyệt khác nhau. Tôi đã phải kiểm tra và sửa lỗi để đảm bảo tính tương thích của ứng dụng trên các trình duyệt phổ biến.',
                    },
                    {
                        id: 5,
                        details:
                            'Kiểm thử và Gỡ lỗi: Việc kiểm tra và gỡ lỗi ứng dụng Vue.js và Vuetify là một phần quan trọng của công việc. Tôi đã sử dụng các công cụ kiểm thử và gỡ lỗi để đảm bảo rằng ứng dụng hoạt động một cách đáng tin cậy.',
                    },
                ],
                socialSharingsHeading: 'Share This',
                socialSharings: [
                    {
                        id: 1,
                        name: 'Twitter',
                        icon: 'twitter',
                        url: 'https://twitter.com/realstoman',
                    },
                    {
                        id: 2,
                        name: 'Instagram',
                        icon: 'instagram',
                        url: 'https://instagram.com/realstoman',
                    },
                    {
                        id: 3,
                        name: 'Facebook',
                        icon: 'facebook',
                        url: 'https://facebook.com/',
                    },
                    {
                        id: 4,
                        name: 'LinkedIn',
                        icon: 'linkedin',
                        url: 'https://linkedin.com/',
                    },
                    {
                        id: 5,
                        name: 'Youtube',
                        icon: 'youtube',
                        url: 'https://www.youtube.com/c/StomanStudio',
                    },
                ],
            },
            relatedProject: {
                relatedProjectsHeading: 'Related Projects',
                relatedProjects: [
                    {
                        id: 1,
                        title: 'Mobile UI',
                        img: require('@/assets/images/mobile-project-1.jpg'),
                    },
                    {
                        id: 2,
                        title: 'Web Application',
                        img: require('@/assets/images/web-project-1.jpg'),
                    },
                    {
                        id: 3,
                        title: 'UI Design',
                        img: require('@/assets/images/ui-project-2.jpg'),
                    },
                    {
                        id: 4,
                        title: 'Kabul Mobile App UI',
                        img: require('@/assets/images/mobile-project-2.jpg'),
                    },
                ],
            },
        }
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
    <div class="container mx-auto mt-10 sm:mt-20">
        <!-- Project header -->
        <ProjectHeader :single-project-header="singleProjectHeader" />

        <!-- Project gallery -->
        <ProjectGallery :project-images="projectImages" />

        <!-- Project information -->
        <ProjectInfo :project-info="projectInfo" />

        <!-- Project related projects -->
        <ProjectRelatedProjects :related-project="relatedProject" />
    </div>
</template>

<style scoped></style>
