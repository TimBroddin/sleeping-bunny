import { useGlobalState } from "../context/GlobalState";
import { styled } from "../stitches.config";

const DebugPanel = styled("div", {
    marginTop: "$10",
});

const Debug = () => {
    const { setSunState, sunState, setSunPercentage, sunPercentage } = useGlobalState();
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

            <input type="range" min={0} max={100} step={1} onChange={e => { setSunPercentage(parseInt(e.currentTarget.value)/100); }} value={sunPercentage*100} />
        </DebugPanel>
    );
};

export default Debug;
