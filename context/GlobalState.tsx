import React from "react";

type sunStateType = "down" | "up" | "rising" | "setting";

interface GlobalStateType {
    sunState: sunStateType;
    setSunState: Function;
    fetchSunState: Function;
}

const GlobalStateContext = React.createContext({
    sunState: "up",
} as GlobalStateType);

interface GlobalStateProviderType {
    children: React.ReactNode;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function GlobalStateProvider(props: GlobalStateProviderType) {
    // we'll update here
    const [sunState, setSunState] = React.useState<sunStateType>("up");

    const fetchSunState = async () => {
        const res = await fetch(
            "https://api.sunrise-sunset.org/json?lat=51.2213&lng=4.4051&formatted=0"
        );
        const data = await res.json();

        const { results } = data || {};
        const { civil_twilight_begin, civil_twilight_end, sunrise, sunset } =
            results || {};
        let sunState: "down" | "up" | "rising" | "setting" = "up";
        if (results) {
            const d = new Date();
            if (d > new Date(civil_twilight_begin) && d < new Date(sunrise)) {
                sunState = "rising";
            } else if (d > new Date(sunrise) && d < new Date(sunset)) {
                sunState = "up";
            } else if (
                d > new Date(sunset) &&
                d < new Date(civil_twilight_end)
            ) {
                sunState = "setting";
            } else {
                console.log(
                    d,
                    civil_twilight_begin,
                    sunrise,
                    sunset,
                    civil_twilight_end
                );
                sunState = "down";
            }
        }

        setSunState(sunState);
    };

    const value = React.useMemo(
        () => ({
            sunState,
            setSunState,
            fetchSunState,
        }),
        [sunState, setSunState]
    );

    return (
        <GlobalStateContext.Provider value={value}>
            {props.children}
        </GlobalStateContext.Provider>
    );
}

export function useGlobalState(): GlobalStateType {
    const context = React.useContext(GlobalStateContext);

    if (!context) {
        throw new Error("You need to wrap GlobalStateProvider.");
    }

    return context;
}
