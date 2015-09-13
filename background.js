// (function(window, document, $, undefined) {
var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
        + chrome.extension.getURL('font-awesome-4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0')
        + '"); }';
document.head.appendChild(fa);

//      var tag = document.createElement('script');
//      tag.src = "https://www.youtube.com/iframe_api";
//      var firstScriptTag = document.getElementsByTagName('script')[0];
//      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     function onYouTubeIframeAPIReady() {
//       // playered = new YT.Player("managed-yt-1", {
//       //   events: {
//       //     'onReady': onPlayerReady,
//       //     'onStateChange': onPlayerStateChange
//       //   }
//       // });
//       // // return player

//         // while(YT.loaded != 1){
//             console.log(YT);
//         // }
//         player = new YT.Player("managed-yt-1");
//         console.log(player);
//         player.pauseVideo();
//         player.playVideo();
//         // var fn = function(){ if(typeof player.playVideo == 'function'){ player.playVideo(); return;} console.log("shit"); gh()}
//         // function gh() { setTimeout(fn, 1000); console.log("asdsd");}
//         // fn();
//     }
// // })(window, document, jQuery);



// function onPlayerReady() {
//   console.log("hey Im ready");
//   //do whatever you want here. Like, player.playVideo();

// }

// function onPlayerStateChange() {
//   console.log("my state changed");
// }

try {
    $(".ytp-chrome-controls").append('<input type="checkbox" value="loop" name="YTlooper" style="display:none"><i name="YTRepeatFacade" class="fa fa-refresh YTElement" title="Put on loop"></i>')
    if($(".ytp-chrome-controls") === null) throw "No YT Element present";
}
catch(err) {
    console.log(err);
}

$("i[name='YTRepeatFacade']").click(function(){
    $(this).siblings("input[name='YTlooper']").trigger("click")
})

$("input[name='YTlooper']").change(function(){
    looper($(this));
})

function looper(checkBoxElement){
    vidElement = $(checkBoxElement).parents().find("video");
    if($(checkBoxElement).is(":checked") === false)
    {
        vidElement.prop("loop", false);
        $(checkBoxElement).siblings("i[name='YTRepeatFacade']").removeClass("YTActive");
        $(checkBoxElement).siblings("i[name='YTRepeatFacade']").attr("title", "Put on loop");
        return
    }
    vidElement.get(0).play();
    vidElement.prop("loop", true)
    $(checkBoxElement).siblings("i[name='YTRepeatFacade']").addClass("YTActive");
    $(checkBoxElement).siblings("i[name='YTRepeatFacade']").attr("title", "Remove loop");
}