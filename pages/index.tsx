import type { NextPage } from "next";
import Canvas from "../components/Canvas";
import { GlobalStateProvider } from "../context/GlobalState";
import Debug from "../components/Debug";

const Home: NextPage = () => {
    return (
        <GlobalStateProvider>
            <Canvas>
                <div>hello</div>
            </Canvas>
            <Debug />
        </GlobalStateProvider>
    );
};

export default Home;
