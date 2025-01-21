import React from "react";
import { projectData } from "./project-data";
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="p-8">
      <p className="text-center text-2xl font-semibold mb-8 text-gray-700">
        Most of my personal projects focus on building ML models for things around finance, <br />
        with a few exceptions, of course{" "}
        <span role="img" aria-label="smile" className="text-xl">😊</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="card-container">
            <div className="card">
              <div className="card-front">
                <Image
                  src={`/static/${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <h3 className="text-center text-xl mt-4">{project.name}</h3>
              </div>
              <div className="card-back">
                <p className="text-center text-lg">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


