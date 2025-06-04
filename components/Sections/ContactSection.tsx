import Link from "next/link";
import { variants } from "@/components/Button";
import { roboto } from "@/lib/font";
import SectionContainer from "@/components/SectionContainer";

export default function ContactSection() {
  return (
    <SectionContainer id="contact">
      <div className="flex flex-col items-center md:gap-6 gap-4 w-full h-full justify-center">
        <h1
          className={roboto.className + " text-blue-300 md:text-base text-sm"}
        >
          What's next in store?
        </h1>
        <h1 className="md:text-4xl text-xl font-semibold">Get in Touch</h1>
        <p className="text-blue-200/85 w-full max-w-xl text-center">
          I'm always up for new adventures, and my inbox is wide open! Or take a
          peek at my blog. Got a question or just wanna say hi? Drop me a
          message, and I'll be sure to get back to you!{" "}
          <span className="text-opacity-100 text-white">🚀</span>
        </p>
        <div className="flex flex-row items-center gap-2">
          <Link
            href="mailto:official@oblivious.me"
            className={variants({ variant: "primary" })}
          >
            Drop a Message
          </Link>
          <Link href="/blog" className={variants({ variant: "primary" })}>
            Read My Blog
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
