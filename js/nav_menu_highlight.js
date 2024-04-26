$(document).ready(function () {
    // Funkce pro aktualizaci aktivního odkazu v navigaci
    function updateActiveLink() {
        var currentSectionId = '';
        var offset = ($(window).width() < 1024) ? 79 : 1; // Určení, zda má být použit offset
        $('section').each(function () {
            var rect = this.getBoundingClientRect();
            if (rect.top - offset <= 0 && rect.bottom > 0) {
                currentSectionId = this.id;
            }
        });

        // Pokud uživatel scrolluje na vrchol stránky, zvýrazněte první odkaz
        if ($(window).scrollTop() === 0) {
            $('#nav_menu li a').removeClass('active'); // Odebrat třídu active ze všech odkazů
            $('#nav_menu li:first-child a').addClass('active'); // Zvýraznit první odkaz
        } else {
            $('#nav_menu li a').removeClass('active'); // Odebrat třídu active ze všech odkazů
            $('#nav_menu li a[href="#' + currentSectionId + '"]').addClass('active'); // Přidat třídu active pouze k aktuálnímu odkazu
        }
    }

    // Inicializace třídy active při načtení stránky
    updateActiveLink();

    // Zavolejte funkci updateActiveLink při posunu stránky
    $(window).on('scroll', function () {
        updateActiveLink();
    });
});