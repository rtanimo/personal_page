import { Button, TextInput, Group, FileInput, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

function UserAppModal() {
    const modals = useModals();

    const form = useForm({
        initialValues: {
            webAddress: "", // Initial value for address
            appName: "", // Initial value for app name
            photo: null, // Initial value for image
        },
    });

    const handleSubmit = (values: {
        webAddress: string;
        appName: string;
        photo: File | null;
    }) => {
        console.log(values); // Process form data
        modals.closeAll(); // close all modals
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                label="Web Address"
                placeholder="https://example.com"
                {...form.getInputProps("webAddress")}
                required
            />
            <TextInput
                label="Name of the App"
                placeholder="Enter the name of your app"
                {...form.getInputProps("appName")}
                required
            />
            <FileInput
                label="Upload a Photo"
                {...form.getInputProps("photo")}
                accept="image/png,image/jpeg"
            />
            <Space h="md" />
            <Group>
                <Button type="submit">Create App Card</Button>
            </Group>
        </form>
    );
}

export default UserAppModal;
