function kirimKeWhatsApp(event) {
  event.preventDefault();

  const nama = document.getElementById("nama_pemesan").value;
  const email = document.getElementById("email_pemesan").value;
  const noHp = document.getElementById("nomor_hp").value;
  const tanggal = document.getElementById("tanggal_reservasi").value;
  const tamu = document.getElementById("jumlah_tamu").value;
  const area = document.getElementById("area_duduk").value;
  const catatan = document.getElementById("catatan_khusus").value;

  const pesan = `Halo Admin OLONS Cafe & Eatery, saya ingin melakukan reservasi meja dengan detail berikut:

*Nama:* ${nama}
*Email:* ${email}
*No. WhatsApp:* ${noHp}
*Tanggal Kedatangan:* ${tanggal}
*Jumlah Tamu:* ${tamu} Orang
*Pilihan Area:* ${area}

*Catatan Khusus:* ${catatan ? catatan : "-"}

Mohon konfirmasinya ya. Terima kasih!`;

  const nomorAdmin = "6282239895909";
  const urlWhatsApp = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;

  window.open(urlWhatsApp, "_blank");
}
