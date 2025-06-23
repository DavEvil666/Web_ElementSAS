function validarFormulario() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmar = document.getElementById('confirmar');

        if (!email.includes('@')) {
          alert('Ingrese un correo válido.');
          return false;
        }
        if (password.length < 6) {
          alert('La contraseña debe tener al menos 6 caracteres.');
          return false;
        }
        if (confirmar && password !== confirmar.value) {
          alert('Las contraseñas no coinciden.');
          return false;
        }
        return true;
        
      }
      
      <script>
function sumarCantidad(btn) {
    const span = btn.parentElement.querySelector('.cantidad');
    let cantidad = parseInt(span.textContent);
    span.textContent = cantidad + 1;
}

function restarCantidad(btn) {
    const span = btn.parentElement.querySelector('.cantidad');
    let cantidad = parseInt(span.textContent);
    if (cantidad > 1) {
        span.textContent = cantidad - 1;
    }
}

function añadirAlCarrito(btn) {
    const card = btn.closest('.producto-card');
    const nombre = card.querySelector('h3').textContent;
    const cantidad = card.querySelector('.cantidad').textContent;
    alert(`Añadido al carrito: ${nombre} (x${cantidad})`);
}
</script>
