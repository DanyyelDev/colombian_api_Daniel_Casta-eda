import styles from "./AirportCard.module.css";

export const AirportCard = async (airports) => {
  const airportsList = airports;

  return (
    <div className={styles.content}>
      <ul>
        {Object.entries(airportsList).map((items) => (
          <li key={items}>
            {Object.entries(items[1]).map((item) => (
              <li key={item}>{item[1].name}</li>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
