import { StatusBar } from "expo-status-bar";

import { Groups } from "@/screens/Groups";
import { NewGroup } from "@/screens/NewGroup";

import "@/styles/global.css";

export default function App() {
  return (
    <>
      {/* <Groups /> */}
      <NewGroup />
      <StatusBar style="dark" translucent />
    </>
  );
}
