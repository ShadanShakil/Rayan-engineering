import React from "react"
import { Card, CardHeader, CardBody } from "@heroui/react"

// Contact JSON
const contactData = {
  address: "Country Terrace, Plot No FL, Sector 16-B, Scheme 33, Karachi",
  email: "rayanengineering@hotmail.com",
  phone: ["0335-3023799", "0313-2888251"],
  ptcl: "(021) 34656557",
  ntn: "4336484-5",
  sntn: "S4336484-5"
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-black text-center">Contact Us</h1>

        {/* Responsive two-column layout with equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Right side (Black box) should appear first in mobile */}
          <Card className="order-1 lg:order-2 bg-black text-white border border-gray-800 h-full flex flex-col">
            {/* Red note stays at top */}
            <CardHeader>
              <div className="w-full">
                <div className="bg-red-600/70 text-white p-4 rounded-lg shadow text-center font-semibold">
                  ⚠️ Please book an appointment for a meeting
                </div>
              </div>
            </CardHeader>

            {/* Centered contact details */}
            <CardBody className="flex flex-col items-center justify-center text-center space-y-3 text-gray-300">
              <h2 className="text-xl font-semibold text-white mb-2">Company Information</h2>
              <p>
                <strong>Address:</strong> {contactData.address}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${contactData.email}`} className="text-blue-400 underline">
                  {contactData.email}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                {contactData.phone.map((num, i) => (
                  <a key={i} href={`tel:${num}`} className="text-blue-400 underline mr-2">
                    {num}
                  </a>
                ))}
              </p>
              <p>
                <strong>PTCL:</strong> {contactData.ptcl}
              </p>
              <p>
                <strong>NTN:</strong> {contactData.ntn}
              </p>
              <p>
                <strong>SNTN:</strong> {contactData.sntn}
              </p>
            </CardBody>
          </Card>

          {/* Left side (Map) should appear second in mobile */}
          <div className="order-2 lg:order-1 w-full h-[400px] lg:h-[600px]">
            <iframe
              title="Rayan Engineering Location"
              src="https://www.google.com/maps?q=Karachi&output=embed"
              className="w-full h-full rounded-lg border border-gray-300 shadow"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}
