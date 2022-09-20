import React, { useEffect } from "react";
import useSWR from "swr";
import { useGlobalState } from "../context/GlobalState";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useSun = () => {
    const { setSunState } = useGlobalState();

    const { data, error } = useSWR(
        "https://api.sunrise-sunset.org/json?lat=51.2213&lng=4.4051&formatted=0",
        fetcher
    );

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
        } else if (d > new Date(sunset) && d < new Date(civil_twilight_end)) {
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

export default useSun;
