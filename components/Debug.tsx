import { useGlobalState } from "../context/GlobalState";
import { styled } from "../stitches.config";

const DebugPanel = styled("div", {
    marginTop: "$10",
});

const Debug = () => {
    const { setSunState, sunState } = useGlobalState();
    const states = ["rising", "up", "down", "setting"];

    return (
        <DebugPanel>
            {states.map((state) => {
                return (
                    <div key={`debug.${state}`}>
                        <label>
                            {state}{" "}
                            <input
                                type="radio"
                                onClick={() => setSunState(state)}
                                checked={sunState === state}
                            />
                        </label>
                    </div>
                );
            })}
        </DebugPanel>
    );
};

export default Debug;
