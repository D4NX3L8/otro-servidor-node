function validarContraseña(password) {
    if (password.length < 8) {
        return "❌ Muy corta";
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        return "⚠️ Debe tener una mayúscula y un número";
    }

    return "✅ Contraseña segura";
}

console.log(validarContraseña("Hola1234"));