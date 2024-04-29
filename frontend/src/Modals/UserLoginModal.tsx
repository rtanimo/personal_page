import { Button, TextInput, Group, PasswordInput, Space } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useModals } from "@mantine/modals";

function UserLoginModal() {
    const modals = useModals();

    const form = useForm({
        initialValues: {
            email: "", // Initial value for email
            password: "", // Initial value for password
        },
    });

    const handleSubmit = (values: { email: string; password: string }) => {
        console.log(values); // Process form data
        modals.closeAll(); // Close the modal
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
                label="Email"
                placeholder="your-email@example.com"
                {...form.getInputProps("email")}
                required
            />
            <PasswordInput
                label="Password"
                placeholder="Enter your password"
                {...form.getInputProps("password")}
                required
            />
            <Space h="md" />
            <Group>
                <Button type="submit">Sign In / Register</Button>
            </Group>
        </form>
    );
}

export default UserLoginModal;
