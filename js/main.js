//deklarasikan id untuk bagian carousl di html dan dimasukkan ke variabel
const carouselWrapper = document.querySelector('.carousel-wrapper');
const listPhotos = document.querySelectorAll('.carousel-photo');
const prevButton = document.querySelector('.arrow-prev');
const nextButton = document.querySelector('.arrow-next');

// nilai awal index
    let currentIndex = 0;

// pengkondisian untuk menghitung banyak nya foto di carousel
const showSlide = (index) => {
    const totalSlides = listPhotos.length; 
    currentIndex = (index + totalSlides) % totalSlides; 
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// jika menekan panah kiri di carousel untuk menggeser ke arah kanan
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// jika menekan panah kanan di carousel untuk menggeser ke arah kiri
nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// auto slide setiap 10 detik
let autoSlide = setInterval(() => {
    showSlide(currentIndex + 1);
}, 10000);

// jika mouse berada didalam element carousel makan autoslide berhenti
carouselWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});

// jika mouse tidak berada didalam element carousel makan autoslide berjalan kembali
carouselWrapper.addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 10000);
});

// pendeklarsian id untuk modal di dialog di html dimasukkan ke dalam variabel
const confirmModal = document.getElementById("confirmation-modal");
const finalModal = document.getElementById("final-modal");
const modalNotif = document.getElementById("modal-notification");
const finalModalNotif = document.getElementById("final-modal-notification");

// fungsi ketika button send di tekan
function sendForm() {
    const name = document.getElementById("name_customer").value.trim();
    const email = document.getElementById("email_customer").value.trim();
    const interest = document.getElementById("interest_id").value;

    // pendeklarasian id untuk error notifikasi di bagian form dimasukkan ke dalam variabel kondisi jika tidak ada masalah
    let isValid = true;
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("interest-error").textContent = "";


    if (name === "") {
        document.getElementById("name-error").textContent = "Your name must filled"; // jika input field nama kosong 
        document.getElementById("name_customer").focus(); //kursor akan kembali ke input field yang kosong
        isValid = false;
    } else if (email === "")  {
        document.getElementById("email-error").textContent = "Your email must filled"; //jika input field email kosong
        document.getElementById("email_customer").focus(); //kursor akan kembali ke input field yang kosong
        isValid = false;
    } else if (interest === "") {
        document.getElementById("interest-error").textContent = "Your interest must filled"; //jika input dropwdow interest kosong
        document.getElementById("interest_id").focus(); //kursor akan kembali ke input field yang kosong
        isValid = false;
    }
    
    if (!isValid) return; // jika diantara input field masih ada yang kosong maka akan mengembalikan nilai false dan akan dilakukan pengulangan dari awal untuk pengecekan hingga semua input field terisi

    modalNotif.textContent = `Name : ${name} \n Email : ${email} \n Interest : ${interest}`; //jika semua terisi maka akan mengubah html dibagian modal di elemen p dan diganti dengan nama, email, dan interest
    confirmModal.style.display = "flex"; //mengatur tampilan modal dialog
}

//fungsi jika melanjutkan ke booking travelling
function confirmBooking() {
    
        //pengambilan nilai dan dimasukkan ke dalam variabel
        const name = document.getElementById('name_customer').value.trim(); 
        const email = document.getElementById('email_customer').value.trim();
        const interest = document.getElementById('interest_id').value;

        //mengubah tampilan html
        finalModalNotif.textContent = `Thank you, ${name}! \n Your interest in ${interest} has been noted. \n Confirmation sent to: ${email}`; 

        confirmModal.style.display = 'none'; //menghilangkan modal dialog pertama
        finalModal.style.display = 'flex';
    }

    //fungsi jika batal melakukan booking
    function cancelBooking() {
        confirmModal.style.display = 'none'; //menghilangkan modal
        finalModal.style.display = 'none'; //menghilangkan modal
        document.getElementById("name_customer").focus(); //kursor fokus ke bagian input field nama
    }

    //fungsi untuk menutup modal dialog kedua
    function closeModal() {
        confirmModal.style.display = 'none'; //menghilangkan modal
        finalModal.style.display = 'none'; //menghilangkan modal
        
        //menghilangkan value diinput field jika sudah berhasil sampai modal dialog kedua
        document.getElementById("name_customer").value = "";
        document.getElementById("email_customer").value = "";
        document.getElementById("interest_id").value = "";
    }