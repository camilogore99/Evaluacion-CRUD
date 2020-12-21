let cars = [
    {
        id: 1,
        marca: ' MAZDA-CX-5',
        modelo: "Gran-Turin",
        color: 'Blanca',
        año: "2021",
        precio: '120.000.00'
    },
    {
        id: 2,
        marca: ' MAZDA-CX4',
        modelo: "Turin",
        color: 'Negra',
        año: "2018",
        precio: '110.000.00'
    },
    {
        id: 3,
        marca: ' MAZDA-CX2',
        modelo: "Gran-Turin",
        color: 'Roja',
        año: "2016",
        precio: '70.000.00'
    },
    {
        id: 4,
        marca: ' MAZDA-CX-1',
        modelo: "Gran-Turin-Each",
        color: 'Blanca',
        año: "2015",
        precio: '150.000.00'
    },
    {
        id: 5,
        marca: ' MAZDA-CX-3',
        modelo: "Gran-Turin",
        color: 'Negra',
        año: "2019",
        precio: '90.000.00'
    }
];
function printCars() {
      // 1. Obtengo el elemento html en el que quiero poner los carros
    // 2. Genero el html de los carros
    // 3. Pongo el html en el elemento obtenido
      const container = document.getElementById("container-cars")
      let html = '';
      cars.forEach((car) =>{
            html += `<tr>
                                  <td>${car.marca}</td>
                                  <td>${car.modelo}</td>
                                  <td>${car.color}</td>
                                  <td>${car.año}</td>
                                  <td>${car.precio}</td>
                                  <td>
                                   <button onclick="deleteCars(${car.id})" class="btn btn-danger">
                                           Eliminar
                                   </button>
                                   <button onclick="updateCars(${car.id})" type="button" class="btn btn-warning">actulizar</button>
                                   </td>
                          </tr>`;
      });
      console.log(cars)
      container.innerHTML = html;
}

function deleteCars(id){
      // Como elimino un valor de un arreglo? 1. pop -> shift -> splice
      // necesito el índice -> ¿cómo obtengo el índice del elemento si lo que yo recibo   es el id? -> findIndex
    alert(`se va eliminar el carro ${id}`)
    const index = cars.findIndex((car) =>car.id == id);
    cars.splice(index,1);

    printCars();
}
function addCars() {
    // obtner el valor del input
    // agregar el usuario al arreglo
    // imprimo nuevamente los usuarios
    const inputModelo = document.getElementById('modelo');
    let modelo = inputModelo.value;

    const id = cars[cars.length -1].id + 1;

    const inputMarca = document.getElementById('marca');
    let marca = inputMarca.value;

    const inputColor = document.getElementById('color');
    let color = inputColor.value;

    const inputAño = document.getElementById('año');
    let año = inputAño.value;

    const inputPrecio = document.getElementById('precio')
    let precio = inputPrecio.value;

    const newCars = {
        id,
        marca,
        modelo,
        color,
        año,
        precio
    }
    cars.push(newCars);

    printCars();

    // limpiamos el formulario
    document.getElementById('form-cars').reset();
}
 function updateCars(id) {
       //necesito saber en que posicion de mi arreglo voy a actualizar
       //agrego los valores que quiero actualizar en la posicion 
      let identificador = id 
      alert(`se va actualizar el carro ${identificador}`)
      for (let i =0 ; i<cars.length; i++) {
            if (identificador === id) {
            const inputModelo = document.getElementById('modelo');
            let modelo2 = inputModelo.value;

            const inputMarca = document.getElementById('marca');
            let marca2 = inputMarca.value;
      
            const inputColor = document.getElementById('color');
            let color2 = inputColor.value;
      
            const inputAño = document.getElementById('año');
            let año2 = inputAño.value;
      
            const inputPrecio = document.getElementById('precio')
            let precio2 = inputPrecio.value;

            const newCars2 = {
            marca2,
            modelo2,
            color2,
            año2,
            precio2
          }
          
          cars.splice((identificador -1),0,newCars2);
          console.log("ya entreeeeeeeeeeeeeeeeeeeeeeeeeeeee")
          printCars();
          i = cars.length
          
         }
      }
      console.log("me sali del ciclo")
}



printCars();