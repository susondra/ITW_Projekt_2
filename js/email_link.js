$(document).ready(function () {
    $('#emailLink').click(function (event) {
        event.preventDefault();

        // Přesměrování na web
        window.location.href = 'https://www.seznam.cz'; // Změňte URL podle potřeby

        // Otevření nové zprávy e-mailu
        var emailAddress = 'xsustr@vutbr.cz'; // Změňte e-mailovou adresu podle potřeby
        var subject = 'Nová zpráva'; // Změňte předmět podle potřeby
        var mailtoLink = 'mailto:' + emailAddress + '?subject=' + encodeURIComponent(subject);
        window.open(mailtoLink);
    });
});