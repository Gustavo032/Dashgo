import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/form/Input";

export default function Home() {
	const { register, handleSubmit } = useForm()

	function handleSignIn(data){
		console.log(data)
	}

	return (
        <Flex
          w="100vw"
          h="100vh"
          align="center"
          justify="center"
		>
			<Flex
			 as="form"
			 w="100%"
			 maxWidth={360}
			 bg="gray.800"
			 p="8"
			 borderRadius={8}
			 flexDir="column"
			 onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">

					<Input
					 name="email"
					 type="email"
					 label="E-mail"
					 {...register('email')}
					/>
					
					<Input
					 name="password"
					 type="password"
					 label="Senha"
					 {...register('password')}
					/>

				</Stack>

				<Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
			</Flex>
        </Flex>
    );
}