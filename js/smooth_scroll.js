$(document).ready(function () {
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var offset = ($(window).width() < 1024) ? 78 : 0; // Určení, zda má být použit offset
            const hash = this.hash;
            const speed = 800;
            TargetPosition = $(hash).offset().top - offset;
            $('html, body').animate(
                {
                    scrollTop: TargetPosition
                },
                speed, // rychlost animace
                function () {
                    window.location.hash = hash - offset;
                }
            );
        }
    });
});