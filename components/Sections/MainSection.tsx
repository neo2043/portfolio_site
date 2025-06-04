import SectionContainer from "@/components/SectionContainer";
import { roboto } from "@/lib/font";
import Link from "next/link";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { variants } from "@/components/Button";

export default function MainSection() {
  return (
    <SectionContainer>
      <h1
        className={
          roboto.className +
          " text-blue-300 md:text-base text-sm animate-fade300"
        }
      >
        Hello, my name is
      </h1>
      <div className="flex flex-col md:gap-4 gap-2 w-full animate-fade500">
        <h1 className="font-semibold md:text-6xl text-4xl">Prabhat Kumar.</h1>
        <h1 className="text-blue-300 font-semibold md:text-6xl text-4xl">
          I Craft Life into Embedded Systems.
        </h1>
      </div>
      <p className="w-full max-w-2xl md:text-lg text-sm text-blue-200 animate-fade700">
        I'm an embedded systems developer and low-level engineer who thrives on
        bringing hardware to life with efficient, rock-solid code. Passionate
        about precision, performance, and pushing microcontrollers to their full
        potential to power smart, reliable devices.
      </p>
      <Link
        href="/resume.pdf"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-row items-center gap-2 md:text-base text-sm hover:text-blue-300 animate-fade900"
      >
        View Resumé <FiExternalLink />
      </Link>
      <div className="flex flex-row items-center gap-6 animate-fade900">
        <Link
          href="https://github.com/neo2043"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/prabhatk2043/"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiLinkedin />
        </Link>
        <Link
          href="https://x.com/notme2047"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiTwitter />
        </Link>
        <Link
          href="mailto:official@oblivious.me"
          className={variants({ variant: "icon" })}
          rel="noopener noreferrer"
          target="_blank"
        >
          <FiMail />
        </Link>
      </div>
    </SectionContainer>
  );
}
