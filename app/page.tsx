import Image from "next/image";


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
    </section>
  );
}
