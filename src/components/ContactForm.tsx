import { Button, FormControl, Input, Textarea } from "@chakra-ui/react";
import React from "react";

const ContactForm = () => {
  return (
    <FormControl>
      <Input
        type="text"
        placeholder="Your name"
        marginBottom={4}
        focusBorderColor="primary"
      />
      <Input
        type="email"
        placeholder="Your email address"
        marginBottom={4}
        focusBorderColor="primary"
      />
      <Textarea
        placeholder="How can I help you ?"
        marginBottom={4}
        focusBorderColor="primary"
      />
      <Button
        variant="outline"
        borderColor="primary"
        borderRadius="md"
        transform="auto"
        transition="ease-in-out .3s"
        _hover={{
          scale: 1.05,
          translateX: 4
        }}
      >
        Send your message
      </Button>
    </FormControl>
  );
};

export default ContactForm;
