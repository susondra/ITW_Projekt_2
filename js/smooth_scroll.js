$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var offset = ($(window).width() < 1024) ? 78 : 0; // Určení, zda má být použit offset
            const hash = this.hash;
            TargetPosition = $(hash).offset().top - offset;
            $('html, body').animate(
                {
                    scrollTop: TargetPosition
                },
                800, // rychlost animace
                function () {
                    window.location.hash = hash - offset;
                }
            );
        }
    });
});