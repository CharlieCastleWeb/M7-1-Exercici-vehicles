
let car: Car = new Car();
const wheelsForm = document.getElementsByClassName("wheels-form")[0];

function showCar(car:Car) {
    let carContainer = document.getElementById("car-container")  as HTMLElement;
    let carPlate = document.getElementById("car-plate")  as HTMLElement;
    let carBrand = document.getElementById("car-brand")  as HTMLElement;
    let carColor = document.getElementById("car-color")  as HTMLElement;
    let carForm = document.getElementsByClassName("car-form")[0];

    carContainer.classList.remove("d-none");
    
    carPlate.innerHTML = "Plate: " + car.plate;
    carBrand.innerHTML = "Brand: " + car.brand;
    carColor.innerHTML = "Color: " + car.color;
    
    carForm.classList.add("d-none"); 
    wheelsForm?.classList.toggle("d-none"); 
}

function showWheels(car:Car) {
    let wheelsContainer = document.getElementById("wheels-container") as HTMLDivElement;

    wheelsContainer.classList.remove("d-none");

    for (let i=1; i<=car.wheels.length; i++) {
        let wheelBrand = document.getElementById("car-wheel"+i+"-brand");
        let wheelDiameter = document.getElementById("car-wheel"+i+"-diameter");

        wheelBrand?.innerHTML = "Wheel "+ i +" Brand: " + car.wheels[i-1].brand;
        wheelDiameter?.innerHTML = "Wheel "+ i +" Diameter: " + car.wheels[i-1].diameter;
    }
    
    wheelsForm?.classList.add("d-none");
}

function validatePlate(plate:string) {
    let regex = /[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}

function createCar() {

    let inputPlate:string = (<HTMLInputElement>document.getElementById("inputPlate")).value;
    let inputColor:string = (<HTMLInputElement>document.getElementById("inputColor")).value;
    let inputBrand: string = (<HTMLInputElement>document.getElementById("inputBrand")).value;
    let inputPlateDiv =  document.getElementById("inputPlate") as HTMLDivElement;
    let inputPlateError =  document.getElementById("plateError") as HTMLDivElement;

    if (validatePlate(inputPlate)) {
        car.plate = inputPlate;
        car.color = inputColor;
        car.brand = inputBrand;
        showCar(car);
    } else {
        inputPlateDiv.classList.add("is-invalid");
        inputPlateError.textContent = "Plate format should be 4 numbers and 3 letters";
    }    
}

function validateBrand() {

}

function addWheels(car:Car) {
    
    for (let i = 1; i<5; i++) {
        
        let marcaRueda:string = (<HTMLInputElement>document.getElementById("marcaRueda"+i)).value;
        let diametroRueda:number = parseFloat((<HTMLInputElement>document.getElementById("diametroRueda"+i)).value);
        let marcaRuedaErrorDiv = document.getElementById("marcaRuedaError"+i) as HTMLDivElement;
        let ruedaErrorDiv = document.getElementById("rueda"+i+"Error") as HTMLDivElement;
        
        document.getElementById("marcaRueda"+i)?.classList.remove("is-invalid");
        document.getElementById("diametroRueda"+i)?.classList.remove("is-invalid");

        if (diametroRueda>=0.4 && diametroRueda<=2 && !marcaRueda == "") {
            let newWheel = new Wheel(diametroRueda, marcaRueda);
            car.addWheel(newWheel);
        } else if (marcaRueda == "") {
            console.log("Error!!!!") ////BORRARRR
            document.getElementById("marcaRueda"+i)?.classList.add("is-invalid");
            marcaRuedaErrorDiv.textContent = "Brand must be indicated";
            return false;
        } else {
            document.getElementById("diametroRueda"+i)?.classList.add("is-invalid");
            ruedaErrorDiv.textContent = "Diameter should be between 0.4 and 2";
            return false;
        }
    }
    showWheels(car);
}

let createCarBtnInput = document.getElementById('createCarBtn')!;
createCarBtnInput.addEventListener("click", function(){
    createCar();
});

let createAddWheelsBtnInput = document.getElementById('createWheelsBtn')!;
createAddWheelsBtnInput.addEventListener("click", function(){
    addWheels(car);
});

console.log(car);