import Image from "next/image";
import { AnimatedShinyText } from "./components/AnimatedShinyText";
import { cn } from "./lib/utils";

export default function Page() {
  return (
    <section>
      <Image
        src="/profile.jpg"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 border-white border-2"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-medium">👋 Hello, I&apos;m Harsh!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a full-stack developer with a focus on NextJS, ReactJS & ASP.NET
          Core Ecosystem.
        </p>
        <p>
          Whether it&apos;s building responsive front-end interfaces or
          architecting scalable back-end systems, I bring a problem-solving
          mindset and a passion for clean, maintainable code.
        </p>
        <p>
          Let&apos;s connect — I&apos;m always open to sharing ideas,
          collaborating, and growing together. 🚀
        </p>
        <p>
          Built and maintained by{" "}
          <a
            href="https://harsh07may.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Harsh
          </a>
          .
        </p>
      </div>
      <div className="z-10 flex min-h-64 items-center gap-2.5">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <a href="/Resume.pdf" download>
              Resume ✨
            </a>
          </AnimatedShinyText>
        </div>
        {/* <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>Contact 📞</span>
          </AnimatedShinyText>
        </div> */}
      </div>
    </section>
  );
}
