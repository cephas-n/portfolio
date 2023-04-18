import { Box, Button, FormControl, Input, Textarea } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
  sender: string;
  email: string;
  message: string;
}

const apiUrl = import.meta.env.VITE_APP_API_URL;

const ContactForm = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    fetch(apiUrl + "/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => toast(data.message));
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        placeholder="Your name"
        marginBottom={4}
        focusBorderColor="primary"
        {...register("sender", { required: true })}
      />
      <Input
        type="email"
        placeholder="Your email address"
        marginBottom={4}
        focusBorderColor="primary"
        {...register("email", { required: true })}
      />
      <Textarea
        placeholder="How can I help you ?"
        marginBottom={4}
        focusBorderColor="primary"
        {...register("message", { required: true })}
      />
      <Button
        type="submit"
        variant="outline"
        borderColor="primary"
        borderRadius="md"
        transform="auto"
        transition="ease-in-out .3s"
        _hover={{
          scale: 1.05,
          translateX: 4,
        }}
      >
        Send your message
      </Button>
    </Box>
  );
};

export default ContactForm;
