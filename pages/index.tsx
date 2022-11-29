import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The lab" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
          Welcome to Next.js!
        </h1>
      </div>
    </div>
  );
}
