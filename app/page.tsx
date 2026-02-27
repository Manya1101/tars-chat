import Sidebar from "./components/Sidebar";
import NewChatButton from "./components/NewChatButton";

export default function Home() {

  return (

    <div className="flex">

      <Sidebar />

      <main className="p-10">

        <NewChatButton />

      </main>

    </div>

  );

}
