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
    <section className="w-11/12 mx-auto">
      {/* top subjects title */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-7 md:text-center">
        Top Listed Subjects
      </h2>

      {/* top subjects cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {subjects.map((subject, i) => (
          <Link
            to="/assignments"
            key={i}
            className="bg-base-200 p-4 rounded flex flex-col items-center justify-center hover:cursor-pointer"
          >
            <div className="bg-base-100 p-2 rounded-full mb-3">
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
    </section>
  );
};

export default TopSubjects;
