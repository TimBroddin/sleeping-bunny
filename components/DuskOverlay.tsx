import { useGlobalState } from "../context/GlobalState";
import { styled } from "../stitches.config";

const Dusk = styled("div", {
    position: "absolute",
    width: "$canvas",
    height: "$canvas",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "background-color 1s",
});

const DuskOverlay = () => {
    const { sunState } = useGlobalState();
    const transparancies = {
        up: 0,
        down: 0.7,
        rising: 0.3,
        setting: 0.3,
    };
    return (
        <Dusk
            css={{
                backgroundColor: `rgba(0,0,0, ${transparancies[sunState]})`,
            }}
        />
    );
};

export default DuskOverlay;
