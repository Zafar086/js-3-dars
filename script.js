const first = alert("Hozir sizda random sonlar chiqishni boshlaydi.")

const randomNum = Math.ceil(Math.random() * 100);

alert(`Random orqali chiqqan son: ${randomNum}`)

let isResult = confirm("Biz random sonni 2 ga ko'paytirmoqchi yoki bo'lmoqchimiz!")

alert(`Random orqali chiqqan sonni: ${randomNum} edi \n
    biz uni 2 ga ko'paytirib ${randomNum *2} sonini chiqardik,\n
    shu sonni 2 ga bo'lib: ${randomNum /2} sonini chiqardik,\n
    va shu sonni 3 ga bo'lgandagi qoldiq: ${randomNum %3} sonini chiqardik,`)
