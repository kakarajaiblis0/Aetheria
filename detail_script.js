// Aetheria: Soul Codex Detail Script – Interpretasi Mendalam Life Path (1-9, 11, 22, 33)

document.addEventListener("DOMContentLoaded", () => {
    const detailTitle = document.getElementById("detail-title");
    const detailLead = document.getElementById("detail-lead");
    const dynamicContent = document.getElementById("dynamic-content");

    // --- DATA INTERPRETASI MENDALAM ---
    const detailedMeanings = {
        1: {
            title: "Life Path 1: 👑 Sang Pionir dan Pemimpin",
            pastLife: "Kehidupan lampau Anda mungkin ditandai oleh kurangnya inisiatif atau kegagalan untuk berdiri sendiri. Ada pelajaran yang belum tuntas tentang kemandirian (self-reliance) dan otonomi. Anda mungkin terbiasa mengikuti atau didominasi, sehingga di kehidupan ini, vibrasi 1 menarik Anda untuk menguasai kepemimpinan, keberanian, dan individualitas sejati.",
            currentTask: "Tugas Anda adalah memupuk percaya diri yang otentik dan mengambil kendali penuh atas nasib Anda. Perbaikan utama yang harus dilakukan adalah mengatasi keraguan diri, menolak sifat ketergantungan (codependency), dan belajar memimpin tanpa menjadi dominan atau arogan. Anda harus menjadi The Initiator—orang yang memulai, bukan yang menunggu.",
            potential: "Potensi maksimal tercapai saat Anda menjadi pemimpin visioner yang menginspirasi, bukan memerintah. Karier di bidang kewirausahaan, manajemen tingkat tinggi, atau bidang apa pun yang membutuhkan inovasi dan tindakan mandiri akan selaras. Wujudkan ide-ide baru dan gunakan individualitas Anda sebagai mercusuar, bukan sebagai isolasi."
        },
        2: {
            title: "Life Path 2: ⚖️ Sang Diplomat dan Penyeimbang",
            pastLife: "Di kehidupan sebelumnya, pelajaran tentang hubungan dan kerjasama mungkin diabaikan. Anda mungkin terlalu fokus pada diri sendiri (egoisme) atau, sebaliknya, terlalu konfrontatif. Vibrasi 2 mendorong Anda kembali untuk menguasai keseimbangan, sensitivitas, dan harmoni. Anda membawa keahlian intuisi, tetapi harus belajar menggunakannya untuk menjembatani, bukan memecah belah.",
            currentTask: "Tugas karmik Anda adalah melayani tanpa menghilang. Anda harus belajar berdiri teguh pada nilai-nilai Anda sambil mempertahankan kepekaan. Perbaikan utama meliputi mengatasi sifat pasif, kecemasan, dan konflik internal. Kuasai seni diplomasi, kesabaran, dan detail-detail kecil yang membuat perbedaan besar.",
            potential: "Potensi maksimal adalah menjadi arsitek perdamaian dan partner yang tak ternilai. Anda bersinar di lingkungan yang membutuhkan negosiasi, konseling, atau mediasi. Capai keseimbangan sempurna antara intuisi (jiwa) dan logika (pikiran) untuk menjadi penasihat yang bijaksana dan lembut. Hidup Anda adalah tentang kemesraan dan persatuan."
        },
        3: {
            title: "Life Path 3: ✨ Sang Ekspresif dan Kreatif",
            pastLife: "Mungkin di masa lampau, suara dan emosi Anda tertekan atau diabaikan. Ada penyesalan karena tidak memanfaatkan bakat alami atau komunikasi yang terhambat. Energi 3 membawa tugas untuk merayakan kegembiraan, keindahan, dan ekspresi dalam segala bentuk. Anda harus menemukan saluran kreatif untuk energi Anda yang melimpah.",
            currentTask: "Tugas Anda adalah menyebarkan kebahagiaan dan menggunakan bakat komunikasi Anda untuk menginspirasi. Perbaikan yang esensial adalah mengatasi kritik diri yang berlebihan, kecenderungan untuk menyebarkan fokus, atau penggunaan kata-kata yang destruktif (gosip). Anda harus mempercayai daya tarik pribadi dan orisinalitas Anda.",
            potential: "Potensi maksimal adalah menjadi penghibur, pembicara, atau seniman yang karismatik dan inspiratif. Pekerjaan yang melibatkan publik, media, atau seni pertunjukan adalah tempat Anda bersinar. Gunakan kata-kata dan kreativitas Anda untuk menyembuhkan dan mencerahkan orang lain, bukan sekadar untuk kesenangan pribadi."
        },
        4: {
            title: "Life Path 4: 🛠️ Sang Pembangun dan Penata Realitas",
            pastLife: "Anda mungkin pernah hidup sebagai pemikir atau idealis yang hebat, namun tanpa kemampuan untuk mewujudkan ide menjadi kenyataan. Pelajaran yang dibawa adalah kebutuhan akan struktur, disiplin, dan etos kerja yang stabil. Anda sekarang harus menguasai materi, bentuk, dan fondasi yang kokoh.",
            currentTask: "Tugas karmik Anda adalah membangun sistem yang abadi. Perbaikan utama adalah menghindari sifat yang terlalu kaku, resistensi terhadap perubahan, atau sikap 'semua atau tidak sama sekali'. Anda harus belajar bekerja secara metodis, tetapi tetap fleksibel. Bangunlah dasar yang kokoh, baik dalam karier, keuangan, maupun kesehatan.",
            potential: "Potensi maksimal adalah menjadi arsitek, manajer, atau ilmuwan yang menghasilkan solusi praktis dan andal bagi dunia. Anda adalah tulang punggung masyarakat. Raihlah kesuksesan melalui ketekunan, perencanaan, dan integritas. Kekuatan Anda terletak pada kemauan untuk bekerja keras dan menciptakan warisan yang bertahan lama."
        },
        5: {
            title: "Life Path 5: 🧭 Sang Petualang dan Katalis Perubahan",
            pastLife: "Kehidupan lampau Anda mungkin terlalu terkekang, monoton, atau didominasi oleh rasa takut akan hal baru. Karena itu, Life Path 5 hadir untuk menuntut kebebasan, variasi, dan adaptasi. Anda harus melepaskan batasan dan merangkul pengalaman hidup secara total.",
            currentTask: "Tugas Anda adalah mewujudkan kebebasan yang bertanggung jawab. Perbaikan utama meliputi pengendalian impulsif, penundaan (prokrastinasi), dan ketidakmampuan untuk berkomitmen. Anda harus belajar mengubah perubahan menjadi pengalaman yang memperkaya, bukan hanya pelarian. Gunakan magnetisme sosial Anda untuk menggerakkan dan memengaruhi orang banyak.",
            potential: "Potensi maksimal adalah menjadi penemu, jurnalis, atau penjual yang ulung, di mana perubahan adalah aset. Anda adalah agen perubahan yang mengantarkan dunia ke masa depan. Jika dikuasai, energi 5 memungkinkan Anda menikmati kebebasan penuh sambil tetap memegang disiplin untuk mencapai tujuan."
        },
        6: {
            title: "Life Path 6: ❤️ Sang Pelayan dan Penanggung Jawab",
            pastLife: "Anda mungkin pernah gagal dalam tugas keluarga, komunitas, atau tanggung jawab etis. Bisa jadi Anda terlalu egois atau terlalu terasing. Vibrasi 6 menuntut Anda untuk menguasai cinta tanpa syarat, penyembuhan, dan pengorbanan. Anda ditakdirkan untuk menjadi pilar komunitas atau keluarga.",
            currentTask: "Tugas karmik Anda adalah memikul beban dengan bijak. Perbaikan utama adalah menghindari sifat suka mencampuri (meddling), martir, atau kecenderungan perfeksionisme yang membuat Anda menilai diri sendiri terlalu keras. Belajarlah untuk mencintai dan melayani tanpa menuntut imbalan atau balasan. Keseimbangan antara memberi dan menerima adalah kunci.",
            potential: "Potensi maksimal adalah menjadi penyembuh, guru, atau konselor yang dicintai dan dihormati. Hidup Anda mencapai puncak ketika Anda menciptakan harmoni di sekitar Anda. Dalam cinta, bisnis, atau komunitas, Anda adalah energi 'Rumah'—tempat di mana orang merasa aman, diakui, dan dicintai. Carilah keindahan dan kesempurnaan dalam pelayanan Anda."
        },
        7: {
            title: "Life Path 7: 🧘 Sang Analis dan Pencari Kebenaran Batin",
            pastLife: "Ada indikasi bahwa di kehidupan lampau, Anda menolak atau mengabaikan kebutuhan spiritual dan batin. Anda mungkin terlalu materialistis atau hanya mengandalkan fakta yang terlihat. Life Path 7 hadir untuk mendorong introspeksi, penelitian, dan penemuan kebenaran di balik tabir realitas.",
            currentTask: "Tugas Anda adalah membangun kepercayaan spiritual. Perbaikan utama adalah mengatasi isolasi diri yang berlebihan, sinisme, dan kecenderungan perfeksionis yang membuat Anda sulit memulai. Anda harus belajar memercayai intuisi Anda sama seperti Anda memercayai data. Gunakan masa-masa sendiri untuk pertumbuhan, bukan untuk pelarian.",
            potential: "Potensi maksimal adalah menjadi filsuf, ilmuwan, atau spesialis yang membawa pemahaman mendalam dan kebenaran baru bagi dunia. Anda adalah pencari kebijaksanaan. Ketika Anda menguasai diri sendiri dan menemukan keharmonisan batin, Anda menjadi seorang Guru yang dapat memimpin orang lain menuju pencerahan."
        },
        8: {
            title: "Life Path 8: 💰 Sang Kekuatan dan Kelimpahan",
            pastLife: "Pelajaran tentang uang, otoritas, dan kekuasaan tidak terselesaikan. Anda mungkin pernah menyalahgunakan kekuatan, atau sebaliknya, takut pada kelimpahan. Life Path 8 adalah pelajaran tentang mengelola realitas materi; Anda harus menguasai dunia bisnis, keuangan, dan status.",
            currentTask: "Tugas karmik Anda adalah menciptakan keseimbangan antara spiritualitas dan materi. Perbaikan utama meliputi menghindari keserakahan, keegoisan, atau menggunakan kekuasaan untuk merugikan orang lain. Anda harus menjadi *The Executive*—seorang pemimpin yang adil, efisien, dan dermawan. Ukuran kesuksesan Anda adalah seberapa banyak Anda mengangkat orang lain.",
            potential: "Potensi maksimal adalah menjadi pemimpin korporat, politisi, atau filantropis skala besar. Anda memiliki kemampuan bawaan untuk mengubah visi menjadi hasil finansial yang nyata. Kunci kebahagiaan Anda adalah menyalurkan kelimpahan materi yang Anda hasilkan untuk tujuan yang lebih tinggi, menciptakan warisan kejujuran dan kekuatan."
        },
        9: {
            title: "Life Path 9: 🌍 Sang Kemanusiaan dan Idealis Universal",
            pastLife: "Kehidupan lampau Anda mungkin berfokus pada diri sendiri (ego) atau dalam lingkup yang sangat sempit. Life Path 9 adalah angka terakhir, menandakan bahwa Anda membawa pelajaran dari semua siklus sebelumnya. Tugas utama Anda sekarang adalah pengabdian universal dan melepaskan keterikatan.",
            currentTask: "Tugas Anda adalah memberi tanpa pamrih dan menguasai pelepasan. Perbaikan utama adalah mengatasi sifat mudah frustrasi, rasa kehilangan (karena Anda sering mengakhiri siklus), dan keterikatan emosional. Anda harus menjadi teladan belas kasih, melayani kemanusiaan tanpa bias. Gunakan empati Anda untuk memahami perspektif global.",
            potential: "Potensi maksimal adalah menjadi seniman yang mempengaruhi, aktivis global, atau pemimpin spiritual yang menginspirasi jutaan orang. Anda adalah *The Completer*. Puncak hidup Anda dicapai ketika Anda hidup dalam Ideal: menggunakan semua bakat Anda bukan untuk diri sendiri, tetapi demi kebaikan kolektif, menjadi sumber kebijaksanaan dan belas kasih."
        },
        // --- MASTER NUMBERS ---
        11: {
            title: "Life Path 11 (Master Number): 💡 Sang Pencerah dan Pembawa Visi",
            pastLife: "Anda mungkin gagal dalam menerima atau memercayai intuisi tinggi Anda. Vibrasi 11 menunjukkan potensi spiritual yang sangat kuat dan tugas untuk menjembatani dunia fisik dan non-fisik. Anda membawa bakat penyembuh dan medium dari masa lalu.",
            currentTask: "Tugas karmik Anda adalah memanfaatkan intuisi tanpa membiarkan kecemasan menguasai. Perbaikan utama meliputi mengatasi kecemasan (yang merupakan energi 11 yang salah arah), sensitivitas berlebihan, dan keraguan untuk bertindak. Jika Anda menolak takdir 11, Anda akan hidup dalam vibrasi 2. Anda harus berani menghadapi keunikan dan menginspirasi dengan menjadi contoh nyata.",
            potential: "Potensi maksimal adalah menjadi Guru, Penyembuh, atau Penemu yang membawa pencerahan massal. Anda adalah kabel tegangan tinggi; Anda harus belajar mengelola kekuatan Anda. Ketika Anda berjalan dalam cahaya 11, Anda menjadi mercusuar yang memandu jalan orang lain melalui kebijaksanaan spiritual yang Anda terima."
        },
        22: {
            title: "Life Path 22 (Master Number): 🏗️ Sang Master Builder dan Pembuat Kenyataan",
            pastLife: "Anda membawa ambisi dan visi besar dari masa lalu, tetapi mungkin gagal dalam mengimplementasikannya dalam skala besar. Vibrasi 22 menunjukkan potensi tertinggi untuk mewujudkan mimpi idealis (11) menjadi kenyataan praktis (4) di dunia materi.",
            currentTask: "Tugas Anda adalah mengubah visi global menjadi aksi nyata. Perbaikan utama adalah menghindari kelesuan atau ketakutan akan skala tugas Anda. Jika Anda takut, Anda akan jatuh ke vibrasi 4 (hanya membangun untuk diri sendiri). Anda harus berpikir besar, bertindak praktis, dan membangun sesuatu yang akan melayani banyak orang dalam jangka panjang. Proyek Anda harus melampaui kepentingan pribadi.",
            potential: "Potensi maksimal adalah menjadi pemimpin proyek dunia, filantropis, atau pembangun institusi yang dampaknya terasa secara global. Anda adalah individu paling kuat dalam numerologi, memiliki kapabilitas untuk mencapai kesuksesan luar biasa dalam materi dan spiritualitas. Bangunlah dunia yang lebih baik, bukan hanya rumah yang lebih baik."
        },
        33: {
            title: "Life Path 33 (Master Number): 💖 Sang Master Teacher dan Penyembuh Ilahi",
            pastLife: "Ini adalah vibrasi Master Number yang paling langka, menunjukkan dedikasi yang mendalam pada kemanusiaan (6) dan visi pencerahan (11). Anda membawa beban karmik yang menuntut Anda untuk menguasai pengorbanan dan cinta tanpa syarat.",
            currentTask: "Tugas karmik Anda adalah melayani sebagai saluran cinta ilahi. Perbaikan utama adalah menghindari sikap 'martir', di mana Anda memberi hingga mengorbankan diri sendiri secara destruktif. Anda harus menyembuhkan orang lain melalui kepekaan Anda, tetapi harus mengisi ulang diri sendiri terlebih dahulu. Tugas Anda adalah mengajar melalui tindakan dan cinta murni, tidak perlu kata-kata. Jika Anda gagal, Anda hidup sebagai 6, memikul tanggung jawab yang sangat berat.",
            potential: "Potensi maksimal adalah menjadi Master Teacher; Anda adalah Kristus/Budha figure dalam numerologi, membawa potensi untuk mengangkat kesadaran kolektif. Anda bersinar dalam pekerjaan yang berfokus pada penyembuhan, pengajaran spiritual, dan memberikan kenyamanan tanpa pamrih pada yang membutuhkan. Hidup Anda adalah tentang Kasih Sayang Tertinggi."
        },
    };

    // Fungsi untuk mendapatkan parameter dari URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const lifePath = getQueryParam('lp');

    if (lifePath && detailedMeanings[lifePath]) {
        const data = detailedMeanings[lifePath];

        // 1. Tampilkan Judul dan Lead
        detailTitle.textContent = data.title;
        detailLead.textContent = `Angka Jalur Hidup ${lifePath} mengungkapkan cetak biru jiwa Anda. Berikut adalah detail Peta Jalan Jiwa Anda yang mendalam:`;

        // 2. Bangun konten dinamis
        dynamicContent.innerHTML = `
            <div style="margin-bottom: 40px;">
                <h2>1. 🧭 Perjalanan Hidup dari Masa Lampau (Pelajaran Karmik)</h2>
                <p class="result-body" style="font-size:16px;">${data.pastLife}</p>
            </div>
            <hr style="margin: 30px 0;">
            <div style="margin-bottom: 40px;">
                <h2>2. 🎯 Hal yang Perlu Dilakukan dan Diperbaiki Sekarang (Tugas Jiwa)</h2>
                <p class="result-body" style="font-size:16px;">${data.currentTask}</p>
            </div>
            <hr style="margin: 30px 0;">
            <div style="margin-bottom: 40px;">
                <h2>3. 🚀 Mencapai Potensi Maksimal di Kehidupan Sekarang (Puncak Evolusi)</h2>
                <p class="result-body" style="font-size:16px;">${data.potential}</p>
            </div>
        `;
    } else {
        // Tampilkan pesan kesalahan jika Life Path tidak valid atau hilang
        detailTitle.textContent = "Data Life Path Tidak Ditemukan";
        detailLead.textContent = "Terjadi kesalahan. Harap kembali ke laman utama dan ulangi perhitungan Anda.";
        dynamicContent.innerHTML = `<p style="color:var(--error-color); margin-top: 20px;">Pastikan Anda menghitung Life Path Anda di laman 'Mulai' sebelum menekan 'Baca Lebih Lanjut'.</p>`;
    }
});