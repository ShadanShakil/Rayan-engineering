import { Card, CardHeader, CardBody } from "@heroui/react"

// JSON data
const aboutData = {
  introduction:
    "Rayan Engineering (REC), based in Karachi, Pakistan, is an electro-mechanical contracting company delivering high-quality industrial and engineering solutions. REC is professionally managed, combining technical expertise with a strong commitment to quality, safety, and timely project completion. The company has been part of many renowned projects across Pakistan, consistently meeting client expectations.",

  capabilities: [
    "Engineering estimation and planning",
    "Petrochemical and gas plant piping",
    "Network plumbing solutions",
    "Firefighting and sprinkler systems",
    "Chilled water HVAC systems",
    "Ducting and cladding work",
    "Steel structure & vessel works",
    "Fabrication, installation & maintenance",
    "Machine manufacturing and dye making"
  ],

  integratedSecurity: [
    "Electrical panel manufacture, installation, testing, and commissioning",
    "Fire alarm system installation",
    "Emergency lighting solutions",
    "Power distribution and LV room setups"
  ],

  safetyGoals: [
    "Zero accidents",
    "No harm to people",
    "No negative impact on the environment"
  ],

  personalSafetyEquipment: [
    "Safety helmets & shoes for protection against falling objects",
    "Ear protection against abnormal noise",
    "Breathing protection with filters or fresh air masks",
    "Mandatory eye protection on all work sites"
  ],

  technicalFacilities: [
    "Food industry",
    "Cement industry",
    "Sugar industry",
    "Petrochemical plants",
    "High-rise buildings",
    "Steel structures & vessels",
    "Wastewater treatment plants",
    "Textile industries"
  ],

  petrochemicalAndGasPlant:
    "With over 20 years of combined on-site experience, our Oil & Gas division ensures first-class project execution, delivered on time and within budget. Our skilled teams are trained to international standards, ensuring client success through reliable services.",

  hvacSystems: [
    "Split air conditioning systems",
    "Package and central AC systems",
    "Chilled and cooling water systems",
    "Commercial & industrial ventilation systems",
    "Ducting & cladding works",
    "Hot water & steam boilers",
    "Building management systems"
  ],

  plumbingServices: [
    "Cold & hot water supply systems",
    "Hot water circulation systems",
    "Pressurized pneumatic water supply",
    "Booster pump sets",
    "Reverse osmosis & water filtration systems",
    "Drainage and sanitary sewer systems",
    "Storm water & rainwater disposal systems",
    "Air conditioning unit drainage systems",
    "Valve & control systems",
    "Testing & commissioning"
  ],

  fireProtectionSystems: [
    "Fire sprinkler systems",
    "Fire hydrant systems",
    "Fire suppression gas systems",
    "Alarm check valve assemblies",
    "Water spray & mist systems",
    "Zone control valves",
    "FM 200 gas test & drain points",
    "Fire hose cabinets/reels & firefighting piping",
    "Fire extinguishing systems"
  ],

  engineeringStaff: [
    "Muhammad Aleem — CEO, Mechanical Engineer (Gulf experience)",
    "Tabish Maqsood — Director, Electrical Engineer",
    "Shahnawaz Salauddin — Admin Manager",
    "Muhammad Sajeed — Electronic Engineer",
    "Muhammad Noor — Plumbing Supervisor (Gulf experience)",
    "Muhammad Saleem — Mechanical Supervisor (Gulf experience)"
  ],

  technicianStaff: [
    "6G Arc & TIG Welders",
    "3G Arc Welders",
    "Pipe & steel structure fabricators",
    "Electricians",
    "Pipe fitters",
    "Helpers & riggers",
    "Fire watchmen",
    "Plumbers & duct fitters",
    "AC technicians",
    "Manpower supply services"
  ],

  clientsAndProjects: [
    {
      client: "ADM Unit 3 Korangi Industrial Area",
      projects: [
        "Boiler piping and steam header installation",
        "Firefighting systems and pump room",
        "Overhead bridge fabrication",
        "Machine manufacturing"
      ]
    },
    {
      client: "K-Electric TP 1000 Project GDAP & New Port Qasim",
      projects: [
        "Fire hydrant piping",
        "Deluge systems",
        "Fire alarm installation",
        "Firefighting pump room"
      ]
    },
    {
      client: "KIA Lucky Motor Port Qasim",
      projects: ["Conveyor installation, testing & commissioning"]
    }
  ]
}

// Reusable list section
function SectionList({ title, items }) {
  return (
    <Card className="bg-black text-white border border-gray-800">
      <CardHeader>
        <h2 className="text-xl font-semibold">{title}</h2>
      </CardHeader>
      <CardBody>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  )
}

// About Page UI
export default function About() {
  return (
    <main className="min-h-screen bg-background text-white">
      {/* Introduction */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-black">About Us</h1>
        <p className="text-gray-700 bg-white p-4 rounded-lg shadow">
          {aboutData.introduction}
        </p>
      </section>

      {/* Loop sections */}
      <div className="container mx-auto px-4 py-8 space-y-6">
        <SectionList title="Our Capabilities" items={aboutData.capabilities} />
        <SectionList title="Integrated Security" items={aboutData.integratedSecurity} />
        <SectionList title="Safety Goals" items={aboutData.safetyGoals} />
        <SectionList title="Personal Safety Equipment" items={aboutData.personalSafetyEquipment} />
        <SectionList title="Technical Facilities" items={aboutData.technicalFacilities} />
        <SectionList title="HVAC Systems" items={aboutData.hvacSystems} />
        <SectionList title="Plumbing Services" items={aboutData.plumbingServices} />
        <SectionList title="Fire Protection Systems" items={aboutData.fireProtectionSystems} />
        <SectionList title="Engineering Staff" items={aboutData.engineeringStaff} />
        <SectionList title="Technician Staff" items={aboutData.technicianStaff} />
      </div>

      {/* Petrochemical and Gas Plant */}
      <section className="container mx-auto px-4 py-8">
        <Card className="bg-black text-white border border-gray-800">
          <CardHeader>
            <h2 className="text-xl font-semibold">Petrochemical & Gas Plant Expertise</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-300">{aboutData.petrochemicalAndGasPlant}</p>
          </CardBody>
        </Card>
      </section>

      {/* Clients & Projects */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-black">Clients & Projects</h2>
        <div className="space-y-4">
          {aboutData.clientsAndProjects.map((client, idx) => (
            <Card key={idx} className="bg-black text-white border border-gray-800">
              <CardHeader>
                <h3 className="text-lg font-semibold">{client.client}</h3>
              </CardHeader>
              <CardBody>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {client.projects.map((proj, i) => (
                    <li key={i}>{proj}</li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
    </main>
  )
}
