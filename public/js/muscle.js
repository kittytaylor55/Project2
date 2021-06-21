var settings = {
    "url": "https://wger.de/api/v2/muscle/",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "sessionid=x0x0cm8x67kb4441ktz8e0ln0gafp1f6"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });