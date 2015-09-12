var fa = document.createElement('style');
    fa.type = 'text/css';
    fa.textContent = '@font-face { font-family: FontAwesome; src: url("'
        + chrome.extension.getURL('font-awesome-4.4.0/fonts/fontawesome-webfont.woff?v=4.4.0')
        + '"); }';
document.head.appendChild(fa);

try {
    $(".ytp-chrome-controls").append('<input type="checkbox" value="loop" name="YTlooper" style="display:none"><i name="YTRepeatFacade" class="fa fa-refresh YTElement" title="Put on loop"></i>')
    if($(".ytp-chrome-controls") === null) throw "No YT Element presen0t";
}
catch(err) {
    console.log(err);
}

$("i[name='YTRepeatFacade']").click(function(){
    $("input[name='YTlooper']").trigger("click")
})

$("input[name='YTlooper']").change(function(){
    looper($(this));
})

function looper(checkBoxElement){
    vidElement = $("video");
    if($(checkBoxElement).is(":checked") === false)
    {
        vidElement.prop("loop", false);
        $("i[name='YTRepeatFacade']").removeClass("YTActive");
        $("i[name='YTRepeatFacade']").attr("title", "Put on loop");
        return
    }
    vidElement.get(0).play();
    vidElement.prop("loop", true)
    $("i[name='YTRepeatFacade']").addClass("YTActive");
    $("i[name='YTRepeatFacade']").attr("title", "Remove loop");
}