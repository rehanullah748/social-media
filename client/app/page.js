import HomeComponent from "@/components/HomeComponent";
import Nav from "@/components/Nav";
export default function Home() {
  return (
    <main className="bg-[#F1F2F6] h-screen">
      <Nav />
      <div className="max-w-screen-xl px-4 mx-auto  w-full">
        <HomeComponent />
      </div>
    </main>
  );
}
