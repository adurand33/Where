// jquery #1 : randomly change body colors

function recolor() {

  col1 = tool.colorize();
  col2 = tool.colorize();

  $('body').css('color', col1);
  $('body').css('background-color', col2);
}

// jquery #2 : on page load append one item to list1

$('#list1').append('<li>Lorem</li>');

// jquery #3 : on button1 click remove last item from list1

$('#button1').click(function() {

    $('#list1 li:last-child').remove();
});

// jquery #4 : on button2 click toggle list view

$('#button2').click(function() {

    $('#list2').slideToggle();
});

// jquery #5 : on button3 click add margin to other buttons (more fun with several)
// used local storage to store a variable allowing the effect

$('#button3').click(function() {

  let count = 1;

  if (localStorage.getItem('count') === null) {

    localStorage.setItem('count', count);
  }
  else {

    count = localStorage.getItem('count');
  }

  switch (count) {

  case '1':
    $('#button1').addClass('mt-5');
    $('#button3').addClass('mt-5');
    $('#button5').addClass('mt-5');
    $('#button7').addClass('mt-5');
    count++;
    break;
  case '2':
    $('#button2').addClass('mt-5');
    $('#button4').addClass('mt-5');
    $('#button6').addClass('mt-5');
    $('#button8').addClass('mt-5');
    count++;
    break;
  case '3':
    $('#button1').removeClass('mt-5');
    $('#button3').removeClass('mt-5');
    $('#button5').removeClass('mt-5');
    $('#button7').removeClass('mt-5');
    count++;
    break;
  case '4':
    $('#button2').removeClass('mt-5');
    $('#button4').removeClass('mt-5');
    $('#button6').removeClass('mt-5');
    $('#button8').removeClass('mt-5');
    count = 1;
    break;
  }

  localStorage.setItem('count', count);
});

// jquery #6 : on button4 click change button color

$('#button4').on('click', function() {

  $(this).toggleClass('btn-secondary').toggleClass('btn-primary');
});

// jquery #7 : on button5 click display an alert box

 $('#button5').click(function() {

    tool.alertize('Machine always wins!');
});

// jquery #8 : on button6 hovered hide buttons

$('#button6').mouseenter(function() {

  for (i = 0; i <= 6; i++) {

    $('#button' + i.toString()).hide();
  }
});

// jquery #9 : when button7 is double clicked randomize colors

$('#button7').on('click', function(e) {

  e.preventDefault(); // cancel default click
});

$('#button7').on('dblclick', function() {

  recolor();
});

// jquery #10 : when button8 is clicked, hide / show all h2s

$('#button8').click(function() { $('h1').is(':visible') ? $('h1').hide() : $('h1').show(); });

// ADVANCED COL

$('#advancedcol').on('click', function() {

  recolor();

  col0 = tool.colorize();
  col1 = tool.colorize() + '!important';
  col2 = tool.colorize();
  col3 = tool.colorize();

  $('h1').css('color', col0);

  $('#backfoot').attr('style', 'background-color:' + col1);
  $('#copyright').css('color', col2);
  $('#copyright').css('background-color', col3);
});

// EXTERNAL PLUGIN

$('#geoloc').click(function() {

  if ($('#mydiv').is(':visible')) {

    $('#section-2').show();
    $('#section-3').show();
    $('#mydiv').hide();
  }
  else {

    $('#section-2').hide();
    $('#section-3').hide();
    $('#mydiv').show();
  }
});

// RELOCATE

$('#whereami').is(":visible") && $('#whereami').click(function() {

  let myloc = {lng: -0.5577591288857408, lat: 44.80249614826052}; // afpa

  // get position

  var options = {

    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  // set position success

  function success(pos) {

    var xyz = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${xyz.latitude}`);
    console.log(`Longitude: ${xyz.longitude}`);
    console.log(`More or less ${xyz.accuracy} meters.`);

    myloc = {lng: xyz.longitude, lat: xyz.latitude};

    goMap(myloc, 16);
  }

  // set default afpa position

  function error(err) {

    console.warn(`ERROR(${err.code}): ${err.message}`);

    goMap(myloc);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
});
