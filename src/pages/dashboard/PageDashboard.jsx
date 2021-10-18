import { React, useState, useEffect } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container, Section, Section1, Div, Div1, Div2, Div3, Div4, } from "../../assets/style/StylePageDash";

const data = [
  { name: "Junho", Escala: 24, amt: 2400 },
  { name: "Julho", Escala: 20, amt: 2210 },
  { name: "Agosto", Escala: 38, amt: 2290 },
  { name: "Setembro", Escala: 39, amt: 2000 },
  { name: "Outubro", Escala: 30, amt: 2181 },

];

const data2 = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const Dashboard = () => {
  // MÉTODO GET
  const [usuarios, setUsuarios] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/user")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUsuarios(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [comunidades, setComunidades] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/community")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setComunidades(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [depoimentos, setDepoimentos] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/brief")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setDepoimentos(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // MÉTODO GET
  const [questionarios, setQuestionarios] = useState([]);

  // Effect para trazer todo conteúdo do objeto
  useEffect(() => {
    fetch("/rest/survey")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setQuestionarios(resp);
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var numUsuarios = Object.keys(usuarios).length;
  var numComunidades = Object.keys(comunidades).length;
  var numDepoimentos = Object.keys(depoimentos).length;
  var numQuestionarios = Object.keys(questionarios).length;

  var total = questionarios.reduce(getTotal, 0);

  function getTotal(total, item) {
    return total + item.escala;
  }

  return (
    <>
      <Container>
        <Section>
          <h2>Dashboard Panace IA</h2>
          <p>Dados atualizados da base de dados oficial Panace IA. </p>
          <Section1> 
            <Div>
                <h1>
                  Usuárias registradas {numUsuarios}
                </h1>
            </Div> 
            <Div1>
              <h1>
                Comunidades criadas {numComunidades}
              </h1>
            </Div1>
            
            <Div2>
              <h1>
                Depoimentos postados {numDepoimentos}
              </h1>
            </Div2>

            <Div3>
              <h1>
                A média de depoimentos por comunidades {" "}
                {`${(numDepoimentos / numComunidades).toFixed(1)}`}
              </h1>
            </Div3>

            <Div4>
              <h1>
                Média de escalas {`${(total / numQuestionarios).toFixed(2)}`}
              </h1>
            </Div4>
          </Section1>
          <div>
            <LineChart
              width={600}
              height={400}
              data={data}
              margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
            >
              <Line
                type="monotone"
                dataKey="Escala"
                stroke="#0d069c"
                activeDot={{ r: 8 }}
              />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <YAxis />
              <XAxis dataKey="name" />
              <Legend />
            </LineChart>
          </div>
          <div>
            <h2>Dashboard</h2>
            <p>Dados atualizados da base de dados oficial Panace IA. </p>
          </div>
          <div>
            <RadarChart outerRadius={90} width={900} height={400} data={data2}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={125} domain={[0, 150]} />

              <Radar
                name="Grupos de Interesses"
                dataKey="B"
                stroke="#060f0a"
                fill="#06f361"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </div>
        </Section>
      </Container>
    </>
  );
};

export default Dashboard;
