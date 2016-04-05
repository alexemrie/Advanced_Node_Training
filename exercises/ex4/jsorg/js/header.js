// put event handlers for header links here


// To make an Ajax call:
// $.ajax( "..", {
// 	  dataType: "text",
// 	  success: function(respText) {
//
// 	  }
// });

$(document).ready(function(){
  var $modal = $("[rel=js-modal]");
  var $content = $modal.children("[rel=js-content]");
	var $close = $modal.children("[rel=js-close]");
  var $controls = $("[rel=js-header] > [rel=js-controls]");

  function hideModal(){
    $content.empty();
    $modal.hide();
  }

  function showModal(url){
    $.ajax(url, {
      dataType: "text",
      success: function(respText){
        $content.html(respText);
        $modal.show();
      }
    });
  }

  $close.on("click", function(){
    hideModal();
  });

  $controls.on("click", "[rel*=js-]",function(evt){
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    if ($modal.is(":visible")){
      hideModal();
    } else {
      var url = $(evt.target).attr("href");
      showModal(url);
    }
  });
});
