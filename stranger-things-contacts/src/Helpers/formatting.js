export function formatPhoneNumber(phoneNumber){
    return phoneNumber.length === 10 ? 
    `(${phoneNumber[0]}${phoneNumber[1]}${phoneNumber[2]}) ${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}-${phoneNumber[6]}${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}` 
    : phoneNumber
}

export function formatDate(date){
    let month = date[5] === '0' ? date[6] : `${date[5]}${date[6]}`
    let day = date[8] === '0' ? date[9] : `${date[8]}${date[9]}`
    let year = `${date[0]}${date[1]}${date[2]}${date[3]}`
    return `${month}/${day}/${year}`
}

export function checkIsUpsideDown(upsideDown){
    return upsideDown === '1' ? true : false
}
