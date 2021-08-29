import react, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
const CovidTracker = () => {
  const [data, setData] = useState([]);

  const trackData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    setData(data.statewise);
    console.log(data);
  };

  useEffect(() => {
    trackData();
  });

  return (
    <>
      <Container>
        <h2 className="py-4">Covid Latest Updates</h2>
        {data.map((dataItems) => (
          <div className="state-wrapper">
            <h2>
              {dataItems.state === "Total" ? "India" : dataItems.state} Covid
              Data
            </h2>
            <div className="covid-list">
              <ul>
                <li>
                  <div>
                    <small>Last Updated: {dataItems.lastupdatedtime}</small>
                    <br />
                    <strong>Active </strong>
                  </div>
                  <span className="active-case"> {dataItems.active}</span>
                </li>
                <li>
                  <div>
                    <small>Last Updated: {dataItems.lastupdatedtime}</small>
                    <br />
                    <strong>Recovered </strong>
                  </div>
                  <span className="recovered-case"> {dataItems.recovered}</span>
                </li>
                <li>
                  <div>
                    <small>Last Updated: {dataItems.lastupdatedtime}</small>
                    <br />
                    <strong>Death </strong>
                  </div>
                  <span className="death-case"> {dataItems.deaths}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default CovidTracker;
