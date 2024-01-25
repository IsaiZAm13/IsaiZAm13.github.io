function validacionExpre() {
    var emailInput = document.getElementById('email');
    var emailHelp = document.getElementById('emailayuda');
    var emailvalidacion = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailvalidacion.test(emailInput.value)) {
      window.alert('Ingresa un correo electrónico válido.');    
      console.log('Ingresa un correo electrónico válido.');
      
      
      return false;
    } else {
      window.alert('Sesion iniciada')
      return true;
    }  }