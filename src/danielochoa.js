function numeroMasRepetido(numeros) {
	const repeticiones = {};
	let resultado = null;
	let mayorCantidad = 0;

	for (const numero of numeros) {
		repeticiones[numero] = (repeticiones[numero] || 0) + 1;

		if (repeticiones[numero] > mayorCantidad) {
			mayorCantidad = repeticiones[numero];
			resultado = numero;
		}
	}

	return resultado;
}

console.log(numeroMasRepetido([2, 5, 2, 8, 5, 2]));
