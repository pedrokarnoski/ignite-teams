import { StatusBar } from "expo-status-bar";

import { Groups } from "@/screens/Groups";
import { NewGroup } from "@/screens/NewGroup";
import { Players } from "@/screens/Players";

import "@/styles/global.css";

export default function App() {
  return (
    <>
      <Groups />
      {/* <NewGroup /> */}
      {/* <Players /> */}
      <StatusBar style="light" translucent />
    </>
  );
}
