import styles from "./ViewPresidents.module.css";
import { PresidentsCard } from "./PresidentCard";
import { getPresidents } from "app/services/ApiColombia/Presidents";

async function generatePoliticalPartys() {
  const response = await getPresidents();
  const presidentsData = await response.json();
  const politicalPartyList = [];

  presidentsData.forEach((president) => {
    const party = president.politicalParty;
    
    const existingPoliticalParty = politicalPartyList.find(
      (item) => item.name === party
    );

    if (existingPoliticalParty) {
      existingPoliticalParty.presidents.push(president);
      existingPoliticalParty.count++;
    } else {
      politicalPartyList.push({
        name: president.politicalParty,
        presidents: [president],
        count: 1
      });
    }
  });
  politicalPartyList.sort((partyA, partyB) => partyB.presidents.length - partyA.presidents.length);

  return politicalPartyList
}

export const ViewPresidents = async () => {
  const politicalPartyList = await generatePoliticalPartys();

  return (
    <div className={styles.content}>
      <h2>Presidentes por Partido Político</h2>
      <ul>
        {Object.entries(politicalPartyList).map((item) => (
            <li key={item}>
              {item[1].name} : { item[1].count } Presidentes
              <PresidentsCard
                presidents= {item[1].presidents}
              ></PresidentsCard>
            </li>
          ))}
      </ul>
    </div>
  );
};
