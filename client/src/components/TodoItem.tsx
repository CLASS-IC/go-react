import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo }: { todo: any }) => {
	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
				flex={1}
				alignItems={"center"}
				border={"1px"}
				borderColor={"gray.300"} // Use a more visible border color
				p={2}
				borderRadius={"lg"}
				justifyContent={"space-between"}
				bg={"gray.800"} // Ensure background contrasts with border
			>
				<Text
					color={todo.completed ? "green.200" : "yellow.100"}
					textDecoration={todo.completed ? "line-through" : "none"}
				>
					{todo.body}
				</Text>
				{todo.completed && (
					<Badge ml='1' colorScheme='green'>
						Done
					</Badge>
				)}
				{!todo.completed && (
					<Badge ml='1' colorScheme='yellow'>
						In Progress
					</Badge>
				)}
			</Flex>
			<Flex gap={2} alignItems={"center"}>
				<Box color={"green.500"} cursor={"pointer"}>
					<FaCheckCircle size={20} />
				</Box>
				<Box color={"red.500"} cursor={"pointer"}>
					<MdDelete size={25} />
				</Box>
			</Flex>
		</Flex>
	);
};

export default TodoItem;
