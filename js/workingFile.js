document.addEventListener("DOMContentLoaded", () => {
    //intro
    $.ajax({
        url: 'https://github.com/SzymekCendecki/piracki-rejs/blob/master/jsonFiles/texts.json',
        type: 'GET',
        dataType: 'json'
        }).done((data) => { $("#info").empty().append(data.texts[0].intro);
        }).fail(()=>{ console.log("coś nie bangla..."); });   
                
        
    $("#title, #subTitle").hide();
    $("#info").on("click", ()=>{
        $("#info").addClass("hideBlur");
        setTimeout(()=>{
            $("#info").remove();
            $("#title, #subTitle").show().addClass("showBlur");
        }, 2500);
    });
    
    $("#title, #subTitle").on("click", ()=>{
        $("#title, #subTitle").removeClass("showBlur");
        $("#title, #subTitle").addClass("hideBlur");
        setTimeout(()=>{
            $("#title, #subTitle").remove();
        }, 2050);
    });
});
