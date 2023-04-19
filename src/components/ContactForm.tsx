import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// interface FormData {
//   sender: string;
//   email: string;
//   message: string;
// }

const schema = z.object({
  sender: z.string().min(3, "Name must be 3 or more characters long"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(20, "Message must be 20 or more characters long")
    .max(1000, "Message must be 1000 or fewer characters long"),
});

type FormData = z.infer<typeof schema>;

const apiUrl = import.meta.env.VITE_APP_API_URL;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    fetch(apiUrl + "/contact", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => toast(data.message))
      .catch((error) => {
        const unpredictableError = !(
          error.status &&
          error.status >= 400 &&
          error.status < 500
        );
        if (unpredictableError) {
          console.error(error);
          toast("An unexpected error has occurred!");
          return;
        }
        toast(error.message);
      });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Input
          type="text"
          placeholder="Your name"
          marginBottom={4}
          focusBorderColor="primary"
          {...register("sender", { required: true })}
        />
        {errors.sender && (
          <Text
            as="small"
            fontSize="sm"
            marginTop={-2}
            marginBottom={2}
            display="block"
            color="red"
          >
            {errors.sender.message}
          </Text>
        )}
      </Box>
      <Box>
        <Input
          type="email"
          placeholder="Your email address"
          marginBottom={4}
          focusBorderColor="primary"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Text
            as="small"
            fontSize="sm"
            marginTop={-2}
            marginBottom={2}
            display="block"
            color="red"
          >
            {errors.email.message}
          </Text>
        )}
      </Box>

      <Box>
        <Textarea
          placeholder="How can I help you ?"
          marginBottom={4}
          focusBorderColor="primary"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <Text
            as="small"
            fontSize="sm"
            marginTop={-2}
            marginBottom={2}
            display="block"
            color="red"
          >
            {errors.message.message}
          </Text>
        )}
      </Box>

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
        disabled={isValid}
      >
        Send your message
      </Button>
    </Box>
  );
};

export default ContactForm;
