import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        portfolios: [{
                title: "Studio168",
                link: "studio168",
                detail: "Admin Side Web Developer",
                description: "Aplikasi berbasis web ini digunakan untuk keperluan administrasi seperti pendataan anggota, instruktur, penjualan produk dan data inventaris di Studio168. Aplikasi ini dibangun menggunakan framework Laravel 8 dan Database Management System MySQL.",
                photos: [
                    "assets/img/portfolio/studio168/studio168 (0).png",
                    "assets/img/portfolio/studio168/studio168 (1).png",
                    "assets/img/portfolio/studio168/studio168 (2).png",
                    "assets/img/portfolio/studio168/studio168 (4).png",
                    "assets/img/portfolio/studio168/studio168 (5).png",
                    "assets/img/portfolio/studio168/studio168 (6).png",
                    "assets/img/portfolio/studio168/studio168 (7).png",
                ],
                tags: ["Laravel 8", "jQuery", "MySQL"],
            },
            {
                title: "LKPK Masterpreneur Multi Talenta",
                link: "seminar",
                detail: "Client Side Web Developer",
                description: "Aplikasi ini digunakan untuk keperluan administrasi seminar-seminar yang diadakan oleh LKPK Masterpreneur Multi Talenta seperti pendaftaran peserta seminar. Aplikasi ini dibangun menggunakan framework Laravel 8 dan Database Management System MySQL.",
                photos: [
                    "assets/img/portfolio/seminar/seminar3.png",
                    "assets/img/portfolio/seminar/seminar1.png",
                    "assets/img/portfolio/seminar/seminar2.png",
                    "assets/img/portfolio/seminar/seminar4.png",
                ],
                tags: ["Laravel 8", "jQuery", "MySQL"],
            },
            {
                title: "Gudang DHD Grosir",
                link: "gudang",
                detail: "Admin Side Web Developer",
                description: "Aplikasi ini digunakan untuk pendataan produk, stok produk, dan perpindahan stok antar gudang yang ada di DHD Grosir. Aplikasi ini dibangun menggunakan framework Codeigniter 3 dan Database Management System MySQL.",
                photos: [
                    "assets/img/portfolio/gudang/1.png",
                    "assets/img/portfolio/gudang/2.png",
                    "assets/img/portfolio/gudang/3.png",
                    "assets/img/portfolio/gudang/4.png",
                ],
                tags: ["Codeigniter 3", "jQuery", "MySQL"],
            },
            {
                title: "CV. Aulia Digital Print Services",
                link: "cvaulia",
                detail: "Final Project",
                description: "Aplikasi ini digunakan untuk memasarkan dan menjual jasa digital print di CV. Aulia. Aplikasi ini dibangun menggunakan framework Codeigniter 3 dan Database Management System MySQL.",
                photos: [
                    "assets/img/portfolio/cvaulia/cvaulia_home.png",
                    "assets/img/portfolio/cvaulia/cvaulia_cart.png",
                    "assets/img/portfolio/cvaulia/cvaulia_login.png",
                    "assets/img/portfolio/cvaulia/cvaulia_admin.png",
                    "assets/img/portfolio/cvaulia/cvaulia_admin_transaction.png",
                ],
                tags: ["Codeigniter 3", "jQuery", "MySQL"],
            },
        ],
    },
    mutations: {},
    actions: {},
    modules: {},
    getters: {
        portfolios: (state) => (link = null) => {
            if (link != null) {
                return state.portfolios.find(portfolio => portfolio.link == link)
            }
            return state.portfolios
        }
    }
})