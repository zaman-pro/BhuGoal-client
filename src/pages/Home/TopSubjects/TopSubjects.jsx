import React from "react";
import { Link } from "react-router";

const subjects = [
  {
    title: "Data Science",
    count: 15,
    img: "https://s14.gifyu.com/images/bH8IV.png",
  },
  {
    title: "Computer Science",
    count: 22,
    img: "https://s14.gifyu.com/images/bH8ug.png",
  },
  {
    title: "Engineering",
    count: 53,
    img: "https://s14.gifyu.com/images/bH8uc.png",
  },
  {
    title: "Web Development",
    count: 25,
    img: "https://s14.gifyu.com/images/bH8uR.png",
  },
  {
    title: "Marketing",
    count: 20,
    img: "https://s14.gifyu.com/images/bH8uW.png",
  },
  {
    title: "Medical",
    count: 10,
    img: "https://s14.gifyu.com/images/bH8u8.png",
  },
  {
    title: "Architecture",
    count: 30,
    img: "https://s14.gifyu.com/images/bH8u6.png",
  },
  {
    title: "Art & Design",
    count: 35,
    img: "https://s14.gifyu.com/images/bH8u4.png",
  },
];

const TopSubjects = () => {
  return (
    <div>
      {/* top subjects title */}

      <div className="mb-3 lg:mb-6 text-center">
        <h2 className="text-2xl lg:text-4xl font-bold leading-tight ">
          Top Listed Subjects
        </h2>

        <small className="">
          Browse popular subjects and connect with friends for group study
          sessions.
        </small>
      </div>

      {/* top subjects cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {subjects.map((subject, i) => (
          <Link
            to="/assignments"
            key={i}
            className="bg-base-200 p-4 rounded flex flex-col items-center justify-center hover:cursor-pointer group shadow-xl shadow-base-300 hover:shadow-lg hover:shadow-accent hover:transition-shadow duration-300 ease-linear"
          >
            <div className="bg-base-300 p-2 rounded-full mb-3 transition-transform duration-300 ease-linear group-hover:scale-110">
              <img
                src={subject.img}
                alt={subject.title}
                className="w-9 h-9 object-contain"
              />
            </div>
            <h4 className="font-semibold text-sm mb-1">{subject.title}</h4>
            <p className="text-xs">
              {subject.count} Assignment{subject.count > 1 ? "s" : ""}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopSubjects;
