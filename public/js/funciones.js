function validateDates() {
    var departingDate = new Date(document.getElementById("departing").value);
    var returningDate = new Date(document.getElementById("returning").value);
    var currentDate = new Date();
    let errores = '';

    if (departingDate <= currentDate || returningDate <= currentDate) {
        errores += "Las fechas deben ser superiores a FECHA ACTUAL.";
    }

    if (departingDate > returningDate) {
        errores += "LA FECHA DE PARTIDA NO PUEDE SER MAYOR A LA DE REGRESO.";
    }

    document.getElementById('error').textContent = errores;
}
