window.onload = () => {
  // Membuat objek Audio baru
  const audio = new Audio('assets/Savetik_1722353535.mp3');

  // Fungsi untuk memutar audio
  const playAudio = () => {
    audio.play().then(() => {
      console.log('Audio sedang diputar.');
    }).catch(error => {
      console.error('Kesalahan saat memutar audio:', error);
    });
  };

  // Menambahkan event listener untuk interaksi pengguna pertama kali
  document.addEventListener('click', function handler() {
    playAudio();
    document.removeEventListener('click', handler);
  });

  // Menambahkan efek fade-out ke container
  document.body.classList.add('fade-out');

  // Memastikan penghapusan kelas sesuai dengan durasi transisi CSS
  setTimeout(() => {
    document.body.classList.remove('container');
  }, 1000); // Durasi harus sesuai dengan durasi transisi CSS

  // Debugging: Memeriksa status audio element
  console.log('Audio ready state:', audio.readyState);
};
