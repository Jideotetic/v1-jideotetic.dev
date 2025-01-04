import { DiPostgresql } from "react-icons/di";
import { FaCode, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter, SiRedux } from "react-icons/si";
import { Fragment } from "react/jsx-runtime";

const PROJECTS = [
  {
    title: "AccionMFB Policy Portal",
    stack: [
      <FaReact />,
      <RiTailwindCssFill />,
      <RiNextjsFill />,
      <DiPostgresql />,
    ],
    description: "AccionMFB policy platform",
  },
  {
    title: "TinkerPal Web",
    stack: [<FaReact />, <RiTailwindCssFill />, <SiReactrouter />],
    description: "Connecting devs with client",
  },
  {
    title: "Octopus Web",
    stack: [<FaReact />, <RiTailwindCssFill />, <RiNextjsFill />, <SiRedux />],
    description: "AccionMonie app dashboard",
  },
  {
    title: "v1.jideotetic.dev",
    stack: [<FaReact />, <RiTailwindCssFill />, <SiReactrouter />],
    description: "My portfolio website",
  },
  {
    title: "MathCollab",
    stack: [
      <FaReact />,
      <RiTailwindCssFill />,
      <SiReactrouter />,
      <IoLogoFirebase />,
    ],
    description: "Math collaboration platform",
  },
];

export default function Projects() {
  return (
    <>
      {PROJECTS.map((project, id) => (
        <div
          className={`p-8 flex border-b border-gray-200 ${
            id === 1 && "sm:border-l"
          } ${id === 2 && "md:border-l  md:border-b"} ${
            id === 3 &&
            "sm:border-l md:border-r md:border-l-0 md:border-b-0 sm:border-b"
          } ${
            id === 4 && "sm:border-r border-b-0"
          } flex-col gap-8 justify-between bg-gradient-to-b from-gray-50 via-white to-gray-50`}
          key={id}
        >
          <FaCode className="mx-auto text-4xl" />
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <div className="flex justify-center items-center gap-2 text-2xl">
            {project.stack.map((stack, id) => (
              <Fragment key={id}>{stack}</Fragment>
            ))}
          </div>
          <p className="text-gray-600 font-pj">{project.description}</p>
        </div>
      ))}
    </>
  );
}
