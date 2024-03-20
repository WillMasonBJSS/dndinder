import Head from "next/head";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <Head>
        <UserButton />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"></main>
    </>
  );
}
