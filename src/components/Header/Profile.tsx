import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile (){
	return(

		<Flex
		 alignItems="center"
		>
			<Box mr="4" textAlign="right">
				<Text>Gustavo Ramos</Text>
				<Text
		 		 color="gray.300" 
				 fontSize="small"
				>
					gustavo.ramos.silva.santos@gmail.com
				</Text>
			</Box>

			<Avatar size="md" name="Gustavo Ramos" src="https://github.com/Gustavo032.png"/>

		</Flex>
	);
} 