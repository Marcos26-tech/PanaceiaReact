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
import { Container } from "../../assets/style/StyleComunidadeGlobal";

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
        <div>
          <h2>Dashboard Panace IA</h2>
          <p>Dados atualizados da base de dados oficial Panace IA. </p>
          <div>
            <h1>O número de usuárias registradas é de: {numUsuarios}</h1>
            <h1>O número de comunidades criadas é de: {numComunidades}</h1>
            <h1>O número de depoimentos postados é de: {numDepoimentos}</h1>
            <h2>
              A média de depoimentos por comunidades é:{" "}
              {`${(numDepoimentos / numComunidades).toFixed(1)}`}
            </h2>
            <h2>
              Média de escalas: {`${(total / numQuestionarios).toFixed(2)}`}
            </h2>
          </div>
        </div>
        <div>
          <LineChart
            width={900}
            height={600}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Line
              type="monotone"
              dataKey="Escala"
              stroke="#040138"
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
      </Container>
    </>
  );
};

export default Dashboard;
