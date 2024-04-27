// @flow strict
import * as React from 'react';


function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.title}
        </p>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-blue-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
          {/* <a href={project.link} target="_blank" rel="noopener noreferrer">demo</a> */}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
      <div>
      <div>
        <a>Devpost:</a>
        <a className="text-cyan-300" href={project.devpost} target="_blank" rel="noopener noreferrer">{project.devpost}</a>
      </div>
      <div>
        <a>Github:</a>
        <a className="text-cyan-300" href={project.github} target="_blank" rel="noopener noreferrer"> {project.github}</a>
      </div>
      <div>
        <a>Read more on LinkedIn:</a>
        <a className="text-cyan-300" href={project.linkedIn} target="_blank" rel="noopener noreferrer"> {project.linkedIn} </a>
      </div>
    </div>

        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink"> 
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">technologies and tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <ul>
              <li><span className="text-cyan-400">{' ' + project.description1}</span></li>
              <li><span className="text-cyan-400">{' ' + project.description2}</span></li>
              <li><span className="text-cyan-400">{' ' + project.description3}</span></li>
            </ul>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Awards:</span>
            <span className="text-pink-400">{' ' + project.awards}</span>
            {/* <span className="text-gray-400">,</span> */}
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
          <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', gap: '50px' }}>
                            <img src={project.image1} className="w-40 mt-4" />
                            <img src={project.image2} className="w-40 mt-4" />
                            <img src={project.image3} className="w-40 mt-4" />
                          </div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;