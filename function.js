function  greeting() {
    let useName = 'Ana';
    console.log(useName);

    if (useName === 'Ana') {
        console.log(`Hello ${useName}`)
    } 
}

greeting(); // Esto imnprimiria: Hello Ana
console.log(useName); // Recibiriamos el error: Uncaught ReferenceError: useName is not defined, porque solo tiene el alcance dentro de la funcion greeting