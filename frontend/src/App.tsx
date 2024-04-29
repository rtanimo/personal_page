import "./App.css";
import {
    Box,
    MantineProvider,
    Text,
    createTheme,
    virtualColor,
    Button,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import LightDarkToggle from "./Components/LightDarkToggle";
import Cards from "./Components/Cards";
import UserAppModal from "./Modals/UserAppModal";
import UserLoginModal from "./Modals/UserLoginModal";

import { ModalsProvider, useModals } from "@mantine/modals";

// theme
const theme = createTheme({
    colors: {
        primary: virtualColor({
            name: "primary",
            dark: "pink",
            light: "cyan",
        }),
        secondary: virtualColor({
            name: "secondary",
            dark: "dark.1",
            light: "light.0",
        }),
    },
});

function MainContent() {
    const modals = useModals();

    const openUserAppModal = () => {
        modals.openModal({
            title: "Add user Application",
            children: <UserAppModal />,
        });
    };

    const openUserLogInModal = () => {
        modals.openModal({
            title: "user Login",
            children: <UserLoginModal />,
        });
    };

    return (
        <>
            <Box>
                <Cards />
            </Box>
            <Box>
                <Button onClick={openUserAppModal}>Add user App</Button>
                <Button onClick={openUserLogInModal}>User Login</Button>
            </Box>
        </>
    );
}

function App() {
    const colorScheme = useColorScheme(); // system colorScheme

    return (
        <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
            <ModalsProvider>
                <Box bg="primary">
                    <Text>Landing Page colorScheme: {colorScheme}</Text>
                    <LightDarkToggle />
                </Box>
                <MainContent />
            </ModalsProvider>
        </MantineProvider>
    );
}

export default App;
