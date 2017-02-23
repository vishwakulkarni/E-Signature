$(function () {
  //for name
  var $text = $('#nos-name');
  var $input = $('#form-username');
  $input.on('keydown', function () {
    setTimeout(function () {
	  if($input.val().length===0)
	{
		$text.html("Vishwanath Kulkarni");
	}
	else{
		  $text.html($input.val());
	}
    }, 0);
  });
  });
  
  //for company
  $(function () {
  var $text = $('#nos-company');
  var $input = $('#form-company');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  //for title
  $(function () {
  var $text = $('#nos-title');
  var $input = $('#form-title');
  $input.on('keydown', function () {
    setTimeout(function () {
	if($input.val().length===0)
	{
		$text.addClass('block-hiden');
	}
	else{
	  $text.html($input.val());
	  $text.attr('class','nos-title-wrapper');
	
	
	}
	}, 0);
  });
  });
  
  //for department
  $(function () {
  var $text = $('#nos-department');
  var $input = $('#form-department');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  //for company phone
  $(function () {
  var $text = $('#nos-phone1');
  var $input = $('#form-companyphone');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  //for mobile
  $(function () {
  var $text = $('#nos-mobile1');
  var $input = $('#form-mobile');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  //for website
  $(function () {
  var $text = $('#nos-website');
  var $input = $('#form-website');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
	  var hreff = "http://www."+$input.val();
	  $text.attr('href',hreff);
    }, 0);
  });
  });
  
  //for email
  $(function () {
  var $text = $('#nos-email');
  var $input = $('#form-email');
  $input.on('keydown', function () {
    setTimeout(function () {
		var hreff = "mailto:"+$input.val();
	  $text.html($input.val());
    }, 0);
  });
  });
  
   //for skype
  $(function () {
  var $text = $('#nos-skype');
  var $input = $('#form-skype');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  //for facebook
  $(function () {
  var $text = $('#nos-facebook');
  var $input = $('#form-facebook');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.attr('href',$input.val());
    }, 0);
  });
  });
  
  //for twitter
  $(function () {
  var $text = $('#nos-twitter');
  var $input = $('#form-twitter');
  $input.on('keydown', function () {
    setTimeout(function () {
	   $text.attr('href',$input.val());
    }, 0);
  });
  });
  
  //for linkedin
  $(function () {
  var $text = $('#nos-linkedin');
  var $input = $('#form-linkedin');
  $input.on('keydown', function () {
    setTimeout(function () {
	   $text.attr('href',$input.val());
    }, 0);
  });
  });
  
  //for Instagram
  $(function () {
  var $text = $('#nos-instagram');
  var $input = $('#form-instagram');
  $input.on('keydown', function () {
    setTimeout(function () {
	   $text.attr('href',$input.val());
    }, 0);
  });
  });
  
  //for address
  $(function () {
  var $text = $('#nos-address');
  var $input = $('#form-address');
  $input.on('keydown', function () {
    setTimeout(function () {
	  $text.html($input.val());
    }, 0);
  });
  });
  
  function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
  
  
document.onclick = function(e) {    
    if (e.target.id === 'select') {
        SelectText('signature-preview');
    }
};

function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}

function deSelect(){
var sel = window.getSelection ? window.getSelection() : document.selection;
if (sel) {
    if (sel.removeAllRanges) {
        sel.removeAllRanges();
    } else if (sel.empty) {
        sel.empty();
    }
}
}