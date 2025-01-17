function formatName(firstName, lastName, callback){
    callback(firstName, lastName);
}
function capitalize(firstName, lastName){
    console.log(`${firstName.toUpperCase()} ${lastName.toLowerCase()}`);
}
function oneLetter(firstName, lastName){
    console.log(`${firstName.charAt(0)} ${lastName}`)
}
function fullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
formatName ('Emmy', 'Karemera', capitalize)
formatName ('Emmy', 'Karemera', oneLetter)
formatName ('Emmy', 'Karemera', fullName)