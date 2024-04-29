import {
    Box,
    Grid,
    GridCol,
    Paper,
    useComputedColorScheme,
    useMantineTheme,
} from "@mantine/core";

function Cards() {
    const theme = useMantineTheme();
    const computedColorScheme = useComputedColorScheme();
    const backgroundColor =
        computedColorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2];
    return (
        <Box
            // bg="secondary"
            style={{
                minHeight: "200px",
                justifyContent: "space-between",
                alignContent: "center",
                padding: "0",
                margin: "0",
                backgroundColor: backgroundColor,
            }}
        >
            <Grid columns={3} style={{ justifyContent: "space-between" }}>
                <GridCol span={1}>
                    <Paper style={{ height: "100%" }}>This is a paper</Paper>
                </GridCol>
                <GridCol span={1}>
                    <Paper>This is a paper</Paper>
                </GridCol>
                <GridCol span={1}>
                    <Paper>This is a paper</Paper>
                </GridCol>
            </Grid>
        </Box>
    );
}

export default Cards;
