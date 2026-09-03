function ruleta(opciones) {
    const resultado = opciones[Math.floor(Math.random() * opciones.length)];

    console.log("🎰 Girando la ruleta...");
    
    setTimeout(() => {
        console.log(`🎉 ¡La ruleta eligió: ${resultado}!`);
    }, 1500);
}

ruleta([
    "Jugar Minecraft",
    "Estudiar JavaScript",
    "Ver anime",
    "Jugar Terraria",
    "Dormir",
    "Comer algo",
    "Perder septiembre"
]);