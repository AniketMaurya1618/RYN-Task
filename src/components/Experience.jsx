import React from "react";
import Star from "../components/ReusableComponent/Star";

const experiences = [
    {
        title: "Lead Product Designer",
        company: "Fortknox",
        duration: "Mar 2022 – Oct 2023",
    },
    {
        title: "Intern Designer",
        company: "OmniSafe",
        duration: "Mar 2022 – Oct 2023",
    },
    {
        title: "UI Designer",
        company: "Doradesign",
        duration: "Mar 2022 – Oct 2023",
    },
    {
        title: "Frontend Developer",
        company: "OpacityAuthor",
        duration: "Mar 2022 – Oct 2023",
    },
];

const Experience = () => {
    return (
        <div className="bg-black text-white max-w-screen-xl mx-auto ">
            <div className="w-full mx-auto">
               <div>
                <Star text="Experience"/>
               </div>

                <div className="py-10">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center sm:flex-row justify-between border-t border-white/45 py-2">
                            <div className="text-lg font-semibold sm:text-xl">{exp.title}</div>
                            <div className="text-right mt-1 sm:mt-0">
                                <div className="font-semibold">{exp.company}</div>
                                <div className="text-sm  text-white/60 py-2">{exp.duration}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
