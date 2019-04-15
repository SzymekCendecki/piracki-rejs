module.exports.intro = function(){
  //intro
  $.ajax({
    url: 'https://szymekcendecki.github.io/piracki-rejs/jsonFiles/texts.json',
    type: 'GET',
    dataType: 'json'
    }).done((data) => { $("#info").empty().append(data.intro[0].info);
    }).fail(()=>{ console.log("coś nie bangla..."); });  
}