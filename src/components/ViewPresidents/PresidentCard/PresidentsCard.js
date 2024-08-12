
import { useState } from "react";
import styles from "./PresidentsCard.module.css";

export const PresidentsCard = async (presidents) => {
  const presidentsList = presidents;

  return (
    <div className={styles.content}>
      <ul>
        {Object.entries(presidentsList.presidents).map((item, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [isExpanded, setIsExpanded] = useState(false);

          const toggleExpand = () => {
            setIsExpanded(!isExpanded);
          };

          return (
            <li key={index}>
              <h3>{item[1].name} {item[1].lastName}</h3>

              <div
                className={`${styles.presidentCard} ${
                  isExpanded ? "" : styles.collapsed
                }`}
              >
                <p>
                <strong>Partido Político:</strong> {item[1].politicalParty}
              </p>
              <p>
                <strong>Período:</strong> {item[1].startPeriodDate} /{" "}
                {item[1].endPeriodDate ?? "En curso"}
              </p>

              <img src={item[1].image} alt={item[1].lastName} />

              <p><strong>Descripción:</strong></p>
              <p>{item[1].description}</p>
                {/* ... card content ... */}
              </div>

              <button className={styles.expandButton} onClick={toggleExpand}>
                {isExpanded ? "Collapse" : "Expand"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
