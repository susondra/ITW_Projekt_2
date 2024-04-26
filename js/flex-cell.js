$(document).ready(function () {
    // Funkce pro dynamické nastavení šířky buňky cell3
    function adjustCellWidth() {
        var maxWidth = 150; // Maximální šířka buňky
        $('.cell3').each(function () {
            $(this).width('auto'); // Reset šířky
            var width = $(this).width(); // Aktuální šířka buňky
            if (width > maxWidth) {
                $(this).width(maxWidth); // Omezení na maximální šířku
            }
        });
    }

    // Spustit funkci při načtení stránky a změně velikosti okna
    adjustCellWidth();
    $(window).resize(adjustCellWidth);
});