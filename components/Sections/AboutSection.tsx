import SectionContainer from "@/components/SectionContainer";
import { roboto } from "@/lib/font";
import { latestShowsAndMovies, tech } from "@/lib/info";
import Link from "next/link";

export default function AboutSection() {
  return (
    <SectionContainer id="about">
      <h1 className={roboto.className + " text-blue-300 md:text-base text-sm"}>
        Who am I?
      </h1>
      <h1 className="md:text-4xl text-xl font-semibold">About</h1>
      <div className="w-full flex flex-col items-start gap-4 text-blue-200/85 md:text-base text-sm">
        <p className="w-full text-justify">
          Heyo! I'm Prabhat Kumar, and I'm an embedded systems developer who
          loves turning hardware into smart, responsive systems. My journey into
          embedded development started with a curiosity for how things work
          under the hood—tinkering with microcontrollers, sensors, and firmware
          quickly evolved into a full-on passion for crafting reliable,
          low-level software that powers real-world devices. Would you believe
          me if my first project was a{" "}
          <a
            href="https://github.com/neo2043"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-50 font-medium hover:text-blue-300 transition-colors"
          >
            Chat Application with ESP32
          </a>
          ?
        </p>
        <p className="w-full text-justify">
          Fast forward to today, I've worked on everything from real-time
          monitoring systems to power-efficient IoT devices. My current focus is
          on building performant, maintainable firmware and integrating
          hardware-software interfaces that are both robust and scalable. I'm
          also exploring{" "}
          {tech.map((tech, i) => (
            <Link
              key={i}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-50 font-medium hover:text-blue-300 transition-colors"
            >
              {tech.text},{" "}
            </Link>
          ))}
          {" and more "}
          and custom bootloaders to push boundaries in embedded and systems
          programming.
        </p>
        <p className="w-full text-justify">
          I love working collaboratively with a team, combining our strengths to
          create projects that not only meet user needs but are ones I
          personally enjoy and use. The process of brainstorming,
          problem-solving, and refining ideas with others is something I truly
          value. I'm also passionate about researching and writing about
          technology, whether it's diving deep into new trends, experimenting
          with different tools, or sharing my insights in blog posts.
        </p>
        <p className="w-full text-justify">
          My hobbies include reading, travelling and watching interesting
          thriller{" "}
          <Link
            href={latestShowsAndMovies.show}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-50 font-medium hover:text-blue-300 transition-colors"
          >
            shows
          </Link>{" "}
          and{" "}
          <Link
            href={latestShowsAndMovies.movie}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-50 font-medium hover:text-blue-300 transition-colors"
          >
            movies
          </Link>
          . I'm always up for a conversation about firmware quirks, open-source
          tools, or the next big thing in embedded tech.
        </p>
      </div>
    </SectionContainer>
  );
}
