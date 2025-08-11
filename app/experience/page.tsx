import { BriefcaseIcon, SchoolIcon } from "lucide-react";

const experience = [
  {
    title: "Full-Stack Developer",
    company: "Ciklum India",
    date: "2023 - Present",
    location: "Pune, India",
    icon: BriefcaseIcon,
  },
  {
    title: "Internship",
    company: "Teknorix Systems Ltd.",
    date: "2022",
    location: "Verna-Goa",
    icon: BriefcaseIcon,
  },
  {
    title: "Graduated University",
    company: "Goa Engineering College",
    date: "2019 - 2023",
    location: "Ponda-Goa",
    icon: SchoolIcon,
  },
];

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        My Experience
      </h1>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experience.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <item.icon className="w-4 h-4 text-blue-800 dark:text-blue-300" />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white">
              {item.title}
              {index === 0 && (
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  Latest
                </span>
              )}
            </h3>
            <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
              {item.company}
            </p>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.date} &middot; {item.location}
            </time>
          </div>
        ))}
      </div>
    </section>
  );
}
