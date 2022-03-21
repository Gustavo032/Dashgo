import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
	showProfileData?: boolean;
}

export function Profile ({showProfileData = true}:ProfileProps){ 
	return(
		<Flex
		 alignItems="center"
		>
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Gustavo Ramos</Text>
					<Text
						color="gray.300" 
						fontSize="small"
					>
						gustavo.ramos.silva.santos@gmail.com
					</Text>
				</Box>
		
			)}
	
			<Avatar size="md" name="Gustavo Ramos" src="https://github.com/Gustavo032.png"/>

		</Flex>
	);
} 