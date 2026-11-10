function calcularPresupuesto() {
  const formulario = document.querySelector('form');
  const campos = Array.from(formulario.querySelectorAll('input'));
  const valores = campos.map((campo) => campo.value.trim());

  if (valores.some((valor) => valor === '')) {
    alert('Completa todos los campos para calcular el presupuesto.');
    return;
  }

  const [invitados, costoComida, costoBebida, costoDecoracion, costoMusica, porcentajePropina] =
    campos.map((campo) => campo.valueAsNumber);

  if (campos.some((campo) => !Number.isFinite(campo.valueAsNumber))) {
    alert('Ingresa valores numéricos válidos en todos los campos.');
    return;
  }

  if (!Number.isInteger(invitados) || invitados <= 0) {
    alert('El número de invitados debe ser un entero mayor que cero.');
    return;
  }

  if ([costoComida, costoBebida, costoDecoracion, costoMusica, porcentajePropina].some((valor) => valor < 0)) {
    alert('Los costos y el porcentaje de propina no pueden ser negativos.');
    return;
  }

  const comidaTotal = invitados * costoComida;
  const bebidaTotal = invitados * costoBebida;
  const subtotal = comidaTotal + bebidaTotal + costoDecoracion + costoMusica;
  const propina = subtotal * (porcentajePropina / 100);
  const totalGeneral = subtotal + propina;
  const costoPorInvitado = totalGeneral / invitados;

  const resultados = [
    comidaTotal,
    bebidaTotal,
    costoDecoracion,
    costoMusica,
    subtotal,
    propina,
    totalGeneral,
    costoPorInvitado
  ];
  const filas = Array.from(document.querySelectorAll('tbody tr'));

  if (filas.length !== resultados.length) {
    throw new Error('La tabla del presupuesto no coincide con los resultados calculados.');
  }

  const formatoMoneda = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  });

  filas.forEach((fila, indice) => {
    fila.children[1].textContent = formatoMoneda.format(resultados[indice]);
  });
}