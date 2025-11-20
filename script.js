// Aetheria: Soul Codex JS – Versi Final (Link Dinamis)

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const nameInput = document.getElementById("name");
  const dobInput = document.getElementById("dob");
  const resultTitle = document.getElementById("result-title");
  const resultBody = document.getElementById("result-body");
  const loadingEl = document.getElementById("loading");
  const moreDetailsBtnContainer = document.getElementById("moreDetailsBtn"); 
  const errorEl = document.getElementById("error-message");

  // --- INTERPRETASI RINGKAS (Untuk laman index saja) ---
  const meanings = {
    1: "Angka 1: Pionir dan Pemimpin. Anda dilahirkan untuk memimpin dengan keberanian dan inisiatif. Tantangan terbesar Anda adalah belajar menerima saran dan memimpin dengan kelembutan, bukan dominasi. Energi Anda adalah sumber dari segala permulaan.",
    2: "Angka 2: Penyeimbang dan Diplomat. Anda adalah sosok yang intuitif, damai, dan sensitif. Kekuatan Anda terletak pada kemampuan bernegosiasi dan bekerja sama. Pelajaran hidup Anda adalah kepercayaan diri dan menghindari kepasifan.",
    3: "Angka 3: Ekspresif dan Kreatif. Dunia menunggu suara Anda yang penuh warna. Baik melalui seni, tulisan, atau berbicara, Anda harus mengekspresikan diri. Jangan biarkan energi Anda terbuang karena kekhawatiran dan penyebaran fokus.",
    4: "Angka 4: Pembangun dan Praktis. Anda adalah pekerja keras yang didorong oleh keteraturan, keamanan, dan metodologi. Ketekunan Anda merancang fondasi yang kokoh. Tantangannya adalah fleksibilitas dan menghindari sikap yang terlalu kaku.",
    5: "Angka 5: Pencari Kebebasan dan Petualang. Perubahan dan variasi adalah guru terbesar Anda. Anda magnetik, suka bersosialisasi, dan cepat beradaptasi. Belajarlah untuk berkomitmen dan mengendalikan impulsivitas.",
    6: "Angka 6: Pelindung dan Penyembuh. Tanggung jawab, kasih sayang, dan pelayanan kepada keluarga atau komunitas memandu langkah Anda. Kehidupan Anda berpusat pada harmoni dan keindahan. Hindari kesempurnaan yang berlebihan.",
    7: "Angka 7: Pencari Kebenaran Batin dan Analis. Kesendirian dan introspeksi memberikan Anda kecerdasan yang mendalam dan spiritual. Anda analitis dan perfeksionis. Percayalah pada intuisi di balik analisis logis Anda.",
    8: "Angka 8: Kekuasaan dan Kelimpahan. Kemampuan Anda mengubah visi menjadi hasil nyata di dunia materi. Anda harus menguasai pelajaran tentang uang, otoritas, dan keadilan. Keseimbangan spiritual dan materi adalah kunci.",
    9: "Angka 9: Kemanusiaan dan Idealisme. Anda adalah pengabdi kemanusiaan; empati dan kasih sayang universal membentuk tujuan hidup Anda. Anda adalah penutup siklus yang harus memberi tanpa mengharapkan imbalan. Hindari rasa kehilangan atau kekecewaan.",
    11: "Angka 11 (Master Number): Pencerahan dan Intuisi. Anda adalah pembawa pesan spiritual, memiliki intuisi tingkat tinggi. Tujuan Anda adalah menginspirasi melalui kepekaan, bukan kecemasan. Angka ini membawa potensi spiritual besar; jika sulit, vibrasinya bisa menjadi Angka 2.",
    22: "Angka 22 (Master Number): Master Builder. Anda memiliki potensi untuk mengubah mimpi besar menjadi kenyataan praktis, memengaruhi banyak orang. Anda adalah pembangun yang visioner. Angka ini membawa potensi pencapaian global; jika sulit, vibrasinya bisa menjadi Angka 4.",
    33: "Angka 33 (Master Number): Master Teacher dan Healer. Ini adalah Angka Kasih Sayang Tertinggi. Anda ditakdirkan untuk melayani dan menyembuhkan melalui cinta tanpa pamrih dan kebijaksanaan. Angka ini membawa potensi pengajaran tertinggi; jika sulit, vibrasinya bisa menjadi Angka 6.",
  };

  function reduceNumber(n) {
    while (n > 9) {
      if (n === 11 || n === 22 || n === 33) {
        return n;
      }
      let s = 0;
      let temp = n;
      while (temp > 0) {
        s += temp % 10;
        temp = Math.floor(temp / 10);
      }
      n = s;
    }
    return n;
  }

  function calcLifePath(dob) {
    if (!dob) return null;

    const date = new Date(dob);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

    const reducedDay = reduceNumber(day);
    const reducedMonth = reduceNumber(month);
    const reducedYear = reduceNumber(year);

    const totalSum = reducedDay + reducedMonth + reducedYear;

    return reduceNumber(totalSum);
  }

  function typeWriter(target, text, speed = 30, callback) {
    target.textContent = "";
    target.style.minHeight = target.offsetHeight + "px";
    let i = 0;
    function step() {
      if (i <= text.length) {
        target.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed + Math.random() * 15);
      } else {
        target.style.minHeight = "auto";
        if (callback) callback();
      }
    }
    step();
  }

  function showLoading() {
    errorEl.style.display = "none";
    loadingEl.style.display = "block";
    resultTitle.textContent = "";
    resultBody.textContent = "";
    moreDetailsBtnContainer.style.display = "none"; 
  }

  function hideLoading() {
    loadingEl.style.display = "none";
  }
  
  function showErrorMessage(message) {
    errorEl.textContent = message;
    errorEl.style.display = "block";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim() || "Penjelajah Aetheria";
    const dob = dobInput.value;

    if (!dob) {
      showErrorMessage("Harap masukkan tanggal lahir Anda (DOB) untuk memulai.");
      return;
    }

    const lifePath = calcLifePath(dob);
    if (!lifePath) {
      showErrorMessage("Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD.");
      return;
    }

    showLoading();

    setTimeout(() => {
      hideLoading();

      const headline = `${name}, Angka Jalur Hidup Anda Adalah ${lifePath}`;
      const interpretation =
        meanings[lifePath] ||
        "Angka ini membawa pesan unik untuk perjalanan batin Anda. Gabungkan intuisi dan tindakan.";

      typeWriter(resultTitle, headline, 25, () => {
        typeWriter(resultBody, interpretation, 25, () => {
          
          // --- PERUBAHAN UTAMA: Tambahkan Life Path ke URL ---
          moreDetailsBtnContainer.href = `more_details.html?lp=${lifePath}`;
          moreDetailsBtnContainer.style.display = "inline-block";
        });
      });
    }, 1800); 
  });
});