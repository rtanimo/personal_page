import {
    Button,
    Box,
    Text,
    useMantineColorScheme,
    useComputedColorScheme,
} from "@mantine/core";

function LightDarkToggle() {
    const { setColorScheme } = useMantineColorScheme(); // hook to change color scheme
    const computedColorScheme = useComputedColorScheme("light"); // hook to compute color scheme

    const handleToggleColorScheme = () => {
        if (computedColorScheme === "dark") {
            setColorScheme("light");
        } else if (computedColorScheme === "light") {
            setColorScheme("dark");
        }
    };
    return (
        <Box>
            <Text>Color Schme: {computedColorScheme}</Text>
            <Button
                onClick={() => {
                    handleToggleColorScheme();
                }}
            >
                Switch Theme
            </Button>
        </Box>
    );
}

export default LightDarkToggle;
