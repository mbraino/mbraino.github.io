function myFunction() {
        var test = "";
        var requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        
        fetch("https://api.vatcomply.com/rates", requestOptions)
          .then(response => response.text())
          .then(result => test = result)
    
          .catch(error => console.log('error', error));

  return test;
};
   
