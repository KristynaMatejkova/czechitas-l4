// tady je místo pro náš program
//1
let title = "Top Gun";
console.log(title);
console.log(title.length);
console.log(title.toUpperCase());
console.log(title.slice(0,5));
console.log(title.slice(-5));
//2
let email = prompt("Zadejte prosím svou e-mailovou adresu:");
let atIndex = email.indexOf('@');
email.slice(0, Number(atIndex));
email.slice(Number(atIndex));

const usersEmail = {
    userName: email.slice(0, Number(atIndex)),
    domain: email.slice(Number(atIndex)+1),
}

document.body.innerHTML = (
'<p> User name: ' + usersEmail.userName + ' </p>' +
'<p> Domain: ' + usersEmail.domain + ' </p>'
);
//3
/*
let street = prompt("Zadejte prosím název ulice:");
let houseNumber = prompt("Zadejte prosím číslo domu:");
let city = prompt("Zadejte město:");
let postalCode = prompt("Zadejte PSČ:");

document.body.innerHTML = `
<address>
    <p>${street} ${houseNumber}</p>
    <p>${postalCode} ${city}</p>
</address> `
*/