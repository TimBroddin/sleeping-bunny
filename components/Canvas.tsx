import { useEffect } from "react";
import { styled } from "../stitches.config";
import DuskOverlay from "./DuskOverlay";
import { useGlobalState } from "../context/GlobalState";
import Sky from "./Sky";
import Sun from "./Sun";

const Container = styled("div", {
    width: "$canvas",
    height: "$canvas",
    position: "relative",
    borderRadius: "$canvas",
    overflow: "hidden",
});

interface CanvasType {
    children: React.ReactNode;
}

const Canvas = ({ children }: CanvasType) => {
    const { fetchSunState } = useGlobalState();

    useEffect(() => {
        fetchSunState();
    }, []);

    return (
        <>
        <Container>
            <Sun />

            <Sky />
            <DuskOverlay />
            {children}
        </Container>
        </>
    );
};

export default Canvas;
