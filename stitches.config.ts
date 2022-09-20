import { createStitches } from "@stitches/react";

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            gray400: "gainsboro",
            gray500: "lightgray",
        },
        sizes: {
            canvas: "480px",
        },
        radii: {
            canvas: "480px",
        },
        margin: {
            10: "10px",
        },
    },
    media: {
        bp1: "(min-width: 480px)",
    },
    utils: {
        marginX: (value: string | number) => ({
            marginLeft: value,
            marginRight: value,
        }),
    },
});
