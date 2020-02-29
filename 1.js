let kecepatanBagus = 7
let jarakTempuhBagus = kecepatanBagus * 3600

let kecepatanIsmail = 10
let jarakTempuhIsmail = 0

let lacakWaktu = 0
while (jarakTempuhIsmail !== jarakTempuhBagus) {
  lacakWaktu++

  jarakTempuhBagus += kecepatanBagus
  jarakTempuhIsmail += kecepatanIsmail
}

let jam = Math.floor(lacakWaktu / 3600)
let menit = Math.floor(lacakWaktu % 3600 / 60)

console.log(`Waktu (s) = ${jam} jam, ${menit} menit`)
console.log(`13:00 + 02:20 => 15:20`)
