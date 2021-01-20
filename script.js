// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__button').first();
let media = $(".player__video")[0];
let progress = $('.progress__filled').first();

player.click(playPauseMedia);

function playPauseMedia() {
    if (media.paused) {
        player.html("&#10074;");
        media.play();
    } else {
        player.html("&#9658;");
        media.pause();
    }
}

//pause ==> &#10074;
//play ==> &#9658;