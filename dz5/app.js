const dollars = [100, 150, 200, 250, 300, 350]

const rate = 89

const soms = dollars.map(function (item) {
    return item * rate;
})

console.log(soms);


const estimation = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5]

const europeanGrades = estimation.map(function (item) {
    if(item === 5) return 'A'
    if(item === 4) return 'B'
    if(item === 3) return 'C'
})
console.log(europeanGrades)

const number = ["0700 123 456", "0770 234 567", "0550 345 678", "0551 456 789", "0555 567 890", "0705 678 901", "0707 789 012", "0755 890 123", "0500 901 234", "0505 012 345"] 
 
const megaNumber = number.filter(function(item){
    if (item[2] == "5") { return true}
})

console.log(megaNumber)

const carNumbers = ["01 KG 123 ABC", "02 KG 456 DEF", "03 KG 789 GHI", "01 KG 321 JKL", "05 KG 654 MNO", "06 KG 987 PQR", "07 KG 111 STU", "01 KG 222 VWX", "09 KG 333 YZA", "01 KG 444 BCD"]

const bishkekNumbers = carNumbers.filter(function (item) {
    if (item.startsWith('01')) {return true}
})
console.log(bishkekNumbers)

const bankCards = ["9500987698769876", "5105105105105100", "4111111111111111", "9500111122223333", "4012888888881881", "5555555555554444", "9500123412341234", "4222222222222", '5454545454545454']

const bancName = bankCards.map (function(item) {
    
    if (item[0] == "4") return 'VISA'
    if (item[0] == "5") return 'MASTERCARD'
    if (item[0] == "9") return 'ELCARD'
})
console.log(bancName)

const emailAddress = ["support.team@mail.ru", "alex.petrov@gmail.com", "sergey.ivanov@yandex.ru", "example123@mail.ru", "john.doe@gmail.com", "anna_k@yandex.ru", "user.mail@mail.ru", "irina_smith@gmail.com",'dev.test@yandex.ru']

const googlMail = emailAddress.filter(function(item){
    
    if (item.endsWith('gmail.com')) return true
})
 
console.log(googlMail)