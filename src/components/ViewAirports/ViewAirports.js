import styles from "./ViewAirports.module.css";
import { getAirPort } from "app/services/ApiColombia/AirPort";
import { AirportCard } from "./AirportCard/AirportCard";

async function generateDataAirports() {
  const response = await getAirPort();
  const airportsData = await response.json();
  const departamentList = [];

  airportsData.forEach((airport) => {
    const departamentName = airport.department.name;
    const existingDepartment = departamentList.find(
      (dep) => dep.name === departamentName
    );

    if (existingDepartment) {
      existingDepartment.airports.push(airport);
    } else {
      departamentList.push({
        name: departamentName,
        airports: [airport],
      });
    }
  });

  return departamentList;
}

export const ViewAirports = async () => {
  const departamentListAirport = await generateDataAirports();

  return (
    <div className={styles.content}>
      <div className="airports-info-container">
        <h2>Agrupación de Aeropuertos</h2>
        <ul>
          {Object.entries(departamentListAirport).map( (item) =>(
              <li key={item}>
                {Number(item[0]) + 1}. {item[1].name}:
                <ul>
                <AirportCard
                  airports= {item[1].airports}
                ></AirportCard>
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

[
  {
      "id": 45,
      "name": "Base Aérea BG. Arturo Lema Posada",
      "iataCode": "N/A",
      "oaciCode": "N/A",
      "type": "Militar",
      "deparmentId": 2,
      "department": {
          "id": 2,
          "name": "Antioquia",
          "description": "Antioquia es uno de los treinta y dos departamentos que, junto con Bogotá, Distrito Capital, forman la República de Colombia. Su capital es Medellín, la segunda ciudad más poblada del país. Está ubicado al noroccidente colombiano, en las regiones Andina y Caribe, limitando al norte con el mar Caribe (océano Atlántico), Córdoba y Bolívar, al este con Santander y Boyacá, al sur con Caldas y Risaralda, y al oeste con Chocó. Con unos 6 500 000 habitantes en 2015 es el departamento más poblado, y con 63 600 km², el sexto más extenso, superado por Amazonas, Vichada, Caquetá, Meta y Guainía.",
          "cityCapitalId": 12,
          "municipalities": 125,
          "surface": 63612,
          "population": 6887306,
          "phonePrefix": "4",
          "countryId": 1,
          "cityCapital": null,
          "country": null,
          "cities": null,
          "regionId": 5,
          "region": null,
          "naturalAreas": null,
          "maps": null,
          "indigenousReservations": null,
          "airports": [
              null
          ]
      },
      "cityId": 91,
      "city": {
          "id": 91,
          "name": "Rionegro",
          "description": "Rionegro es un municipio de Colombia, ubicado en el departamento de Antioquia. Está localizado en el valle de San Nicolás o también llamado Altiplano del Oriente, en la subregión Oriente, siendo la ciudad con mayor población y la que concentra el movimiento económico de la subregión. Está ubicada a tan solo 35 minutos de Medellín, capital del departamento, gracias al túnel de interconexión Aburrá-Oriente. Su nombre oficial es Ciudad Santiago de Arma de Rionegro.",
          "surface": 196,
          "population": 135465,
          "postalCode": "54040",
          "departmentId": 2,
          "department": null,
          "touristAttractions": null,
          "presidents": null,
          "indigenousReservations": null,
          "airports": [
              null
          ],
          "radios": null
      },
      "latitude": -75.42037792,
      "longitude": 6.166336066
  },
]