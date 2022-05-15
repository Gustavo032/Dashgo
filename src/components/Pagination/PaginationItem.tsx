import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
	pageNumber: number
	isCurrency?: boolean;
	onPageChange: (page: number) => void
}


export function PaginationItem({
		onPageChange, 
		isCurrency = false, 
		pageNumber
	}:PaginationItemProps){
	if(isCurrency){
		return(
			<Button
			 size="sm"
			 fontSize="xs"
			 width="4"
			 colorScheme="pink"
			 disabled
			 _disabled={{
				 bgColor: "pink.500",
				 cursor: 'default',
			 }}
			>
				{pageNumber}
			</Button>
		);	
	}
	
	return(
		<Button
		 size="sm"
		 fontSize="xs"
		 width="4"
		 bg='gray.700'
		 _hover={{
		 	bg: "gray.500"
		 }}
		 onClick={()=>onPageChange(pageNumber)}
		>
			{pageNumber}
		</Button>
	)
}
