import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react"
import { Badge } from "@heroui/react"

// JSON data
const companyData = [
  {
    client: "ADM Unit 3 Korangi Industrial Area",
    projects: [
      'Boiler Steam Piping Fabrication and Installation (1" Dia to 6" Dia and Steam Header 24" Dia Insulation and SS Cladding)',
      '6" Power Hose Gas Line Piping (6" & 4")',
      'Cold Water Piping Fabrication and Installation (1" Dia to 16" Dia)',
      'Air Piping (½" Dia to 6" Dia)',
      "Sower and Dryer Complete Installation and Connection",
      'Firefighting Piping Fabrication and Installation (1" Dia to 6" Dia) with Pump Room (700 GPM)',
      "Heavy Steel Stretcher Overhead Bridge and Platform Fabrication and Installation",
      "Testing and Commissioning Operation",
      "Grill, Roller, and Machine Manufacturing",
      "Pump, Valve, and Material Supply",
    ],
  },
  {
    client: "K Electric - Grade Station TP 1000 Project GDAP and New Port Qasim",
    projects: [
      "Fire Hydrant Piping Fabrication and Installation",
      "Fire Separation System Fabrication and Installation",
      "Deluge System Fabrication and Installation with Equipment",
      "Fire Alarm Installation",
      "Complete Firefighting Pump Room Fabrication and Installation",
    ],
  },
  {
    client: "KIA Lucky Motor Port Qasim",
    projects: ["Conveyor Installation Testing, Commissioning, and Operation"],
  },
  {
    client: "INTEG Engineering and Trading",
    projects: [
      "Al Hamd Warehouse Port Qasim – Firefighting Complete Fabrication and Installation with Equipment",
      "National Industrial Park Korangi Creek Inerwood – Firefighting Pump Room Complete Fabrication, Installation, Testing, and Commissioning",
      "Zamzama Mall DHA – AHU Connection, FCU Connection, Firefighting Pump Room Fabrication, Installation, Testing, and Commissioning",
    ],
  },
  {
    client: "Interloop",
    projects: [
      "Warehouse Firefighting Sprinkler and Fire Hydrant System",
      'Underground HDPE Piping (3" Dia to 10" Dia, 3000 Meters)',
      'MS Piping (1" Dia to 8" Dia, 20,000 Meters)',
    ],
  },
  {
    client: "MAK",
    projects: [
      "Bahria Town – Water Line, Pump Installation, Plumbing Work",
      'Auditorium Cantonment Malir – Firefighting Underground HDPE Piping and MS Piping with Pump Room and Equipment Fabrication and Installation, Testing, Commissioning and Operation, SS 2" and 3" Reeling Work',
    ],
  },
  {
    client: "Amna Textile Landhi Industrial Area",
    projects: ['316L SCH 40 RO Plant Header (3" and 2") Fabrication and Installation with Material'],
  },
  {
    client: "Rajby Textile Korangi Industrial Area",
    projects: [
      'MS Pipe 24" SCH 40 Waste Water',
      'Boiler Steam Pipe Line (4", 3", 2", 1")',
      'LPG Gas Pipe Line (6" & 3") Fabrication and Installation',
    ],
  },
  {
    client: "Orient Energy Project (In hand – Grad Station Mehmooda Bad and Dhahbaijy K Electric)",
    projects: ["Mechanical Installation Fire Hydrant System", "Water Deluge System", "FM 200 Suppression System"],
  },
]

// Single card component
function CompanyProjectCard({ project }) {
  return (
    <Card className="w-full h-full bg-black text-white border border-gray-800">
      <CardHeader className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{project.client}</h2>
        <Badge color="secondary" className="bg-gray-800 text-white border border-gray-700">
          {project.projects.length} Project{project.projects.length !== 1 ? "s" : ""}
        </Badge>
      </CardHeader>
      <CardBody className="space-y-2">
        {project.projects.map((item, idx) => (
          <div key={idx} className="p-2 rounded-lg bg-gray-900 border border-gray-700">
            <p className="text-sm">{item}</p>
          </div>
        ))}
      </CardBody>
      <CardFooter />
    </Card>
  )
}

// Grid to display all projects
function CompanyProjectsGrid({ data }) {
  return (
    <div className="container mx-auto px-4 py-6 bg-white min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-balance mb-2 text-black">Company Projects Portfolio</h1>
        <p className="text-gray-600">
          Showcasing our diverse range of industrial and engineering projects across various clients
        </p>
      </div>

      <div className="space-y-4">
        {data.map((project, index) => (
          <div key={index} className="w-full">
            <CompanyProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Main App
export default function Projects() {
  return (
    <main className="min-h-screen bg-background">
      <CompanyProjectsGrid data={companyData} />
    </main>
  )
}
