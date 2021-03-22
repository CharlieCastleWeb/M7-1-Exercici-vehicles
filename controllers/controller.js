var car = new Car();
var wheelsForm = document.getElementsByClassName("wheels-form")[0];
function showCar(car) {
    var carContainer = document.getElementById("car-container");
    var carPlate = document.getElementById("car-plate");
    var carBrand = document.getElementById("car-brand");
    var carColor = document.getElementById("car-color");
    var carForm = document.getElementsByClassName("car-form")[0];
    carContainer.classList.remove("d-none");
    carPlate.innerHTML = "Plate: " + car.plate;
    carBrand.innerHTML = "Brand: " + car.brand;
    carColor.innerHTML = "Color: " + car.color;
    carForm.classList.add("d-none");
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.toggle("d-none");
}
function showWheels(car) {
    var wheelsContainer = document.getElementById("wheels-container");
    wheelsContainer.classList.remove("d-none");
    for (var i = 1; i <= car.wheels.length; i++) {
        var wheelBrand = document.getElementById("car-wheel" + i + "-brand");
        var wheelDiameter = document.getElementById("car-wheel" + i + "-diameter");
        wheelBrand === null || wheelBrand === void 0 ? void 0 : wheelBrand.innerHTML = "Wheel " + i + " Brand: " + car.wheels[i - 1].brand;
        wheelDiameter === null || wheelDiameter === void 0 ? void 0 : wheelDiameter.innerHTML = "Wheel " + i + " Diameter: " + car.wheels[i - 1].diameter;
    }
    /*let displayWheels:string = `
        <table class="table table-sm table-borderless">
        <thead>
            <tr>
                <th>Wheels:</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>Wheel 1: ${car.wheels[0].brand}</td>
            <td>Wheel 2: ${car.wheels[1].brand}</td>
            <td>Wheel 3: ${car.wheels[2].brand}</td>
            <td>Wheel 4: ${car.wheels[3].brand}</td>
        </tr>
        <tr>
            <td>DLC Diameter: ${car.wheels[0].diameter}</td>
            <td>DLC Diameter: ${car.wheels[1].diameter}</td>
            <td>DLC Diameter: ${car.wheels[2].diameter}</td>
            <td>DLC Diameter: ${car.wheels[3].diameter}</td>
        </tr>
        </tbody>
        </table>
    `; */
    wheelsForm === null || wheelsForm === void 0 ? void 0 : wheelsForm.classList.add("d-none");
    //divWheels.innerHTML = displayWheels;
}
function validatePlate(plate) {
    var regex = /[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}
function createCar() {
    var inputPlate = document.getElementById("inputPlate").value;
    var inputColor = document.getElementById("inputColor").value;
    var inputBrand = document.getElementById("inputBrand").value;
    var inputPlateDiv = document.getElementById("inputPlate");
    var inputPlateError = document.getElementById("plateError");
    if (validatePlate(inputPlate)) {
        car.plate = inputPlate;
        car.color = inputColor;
        car.brand = inputBrand;
        showCar(car);
    }
    else {
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Plate format should be 4 numbers and 3 letters";
    }
}
function validateBrand() {
}
function addWheels(car) {
    var _a, _b, _c, _d;
    for (var i = 1; i < 5; i++) {
        var marcaRueda = document.getElementById("marcaRueda" + i).value;
        var diametroRueda = parseFloat(document.getElementById("diametroRueda" + i).value);
        var marcaRuedaErrorDiv = document.getElementById("marcaRuedaError" + i);
        var ruedaErrorDiv = document.getElementById("rueda" + i + "Error");
        (_a = document.getElementById("marcaRueda" + i)) === null || _a === void 0 ? void 0 : _a.classList.remove("is-invalid");
        (_b = document.getElementById("diametroRueda" + i)) === null || _b === void 0 ? void 0 : _b.classList.remove("is-invalid");
        if (diametroRueda >= 0.4 && diametroRueda <= 2 && !marcaRueda == "") {
            var newWheel = new Wheel(diametroRueda, marcaRueda);
            car.addWheel(newWheel);
        }
        else if (marcaRueda == "") {
            console.log("Error!!!!"); ////BORRARRR
            (_c = document.getElementById("marcaRueda" + i)) === null || _c === void 0 ? void 0 : _c.classList.add("is-invalid");
            marcaRuedaErrorDiv.textContent = "Brand must be indicated";
            return false;
        }
        else {
            (_d = document.getElementById("diametroRueda" + i)) === null || _d === void 0 ? void 0 : _d.classList.add("is-invalid");
            ruedaErrorDiv.textContent = "Diameter should be between 0.4 and 2";
            return false;
        }
    }
    showWheels(car);
}
var createCarBtnInput = document.getElementById('createCarBtn');
createCarBtnInput.addEventListener("click", function () {
    createCar();
});
var createAddWheelsBtnInput = document.getElementById('createWheelsBtn');
createAddWheelsBtnInput.addEventListener("click", function () {
    addWheels(car);
});
console.log(car);
