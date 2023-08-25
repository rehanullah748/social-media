"use client";
import HomeComponent from "@/components/HomeComponent";
import Nav from "@/components/Nav";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const { push } = useRouter();
  const { globalState } = useAuth();
  useEffect(() => {
    if (!globalState.token) {
      push("/auth/login");
    }
  }, [globalState]);
  if (globalState.loader) {
    return <h1>Loading.........</h1>;
  }
  return (
    <main className="bg-[#F1F2F6] h-screen">
      <Nav />
      <div className="max-w-screen-xl px-4 mx-auto  w-full">
        <HomeComponent />
      </div>
    </main>
  );
}
