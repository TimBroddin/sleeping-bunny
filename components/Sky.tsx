import { styled } from "@stitches/react";
import { useGlobalState } from "../context/GlobalState";

const SkyBox = styled("div", {
    position: "absolute",
    width: "$canvas",
    height: "$canvas",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "background-color 1s",
});

const Sky = () => {
    const { sunState } = useGlobalState();
    const backgrounds = {
        up: "linear-gradient(180deg, rgba(75,129,149,1) 0%, rgba(113,171,242,1) 30%, rgba(53,198,227,1) 100%)",
        down: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,59,121,1) 69%, rgba(0,0,0,1) 100%)",
        rising: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,59,121,1) 40%, rgba(255,181,0,1) 100%)",
        setting:
            "linear-gradient(180deg, rgba(149,96,75,1) 0%, rgba(9,59,121,1) 68%, rgba(0,0,0,1) 100%)",
    };

    return <SkyBox css={{ background: backgrounds[sunState] }} />;
};

export default Sky;
