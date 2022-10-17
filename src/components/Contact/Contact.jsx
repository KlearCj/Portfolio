import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import "../../global.css";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    if (!message)
      return toast({
        title: "Message is empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
  /* emailjs.sendForm('service_j32xm0k', 'template_g54ljys', form.current, '0Y5K2H_PZPEuDWOwm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); */
    setMessage("");
    return toast({
      title: "Message sent successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    }
    return error;
  }
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Email is required";
    }
    return error;
  }

  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  return (
    <Box id="contact" w={{lg:"80%"}} pl={{lg:"350px"}}>
      <Heading size={{base:"lg", lg:"xl"}} color="#8878BA" pl="10px">
        Contact
      </Heading>
      <Flex
        h={{ base: "500px" }}
        pos="relative"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="box">
          <Box>
            <Text as='h3'color='#ffffff'>LET'S TALK</Text>
          </Box>
          <Formik
            initialValues={{ name: "", email: "", message}}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {(props) => (
              <Form ref={form} onSubmit={sendEmail}>
                <Field name="name" validate={validateName}>
                  {({ field, form }) => (
                    <FormControl
                      pb="5px"
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <FormLabel color='#ffffff'>Name</FormLabel>
                      <Input {...field} placeholder="Name" color='#ffffff'/>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="email" validate={validateEmail}>
                  {({ field, form }) => (
                    <FormControl
                      pb="5px"
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <FormLabel color='#ffffff'>Email</FormLabel>
                      <Input {...field} placeholder="Email" color='#ffffff'/>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Text color='#ffffff'>Message</Text>
                <Textarea
                  color='#ffffff'
                  name="message"
                  value={message}
                  onChange={handleInputChange}
                  placeholder="Let me a message :D"
                  size="sm"
                />
                <Button
                  className="button"
                  mt={4}
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
