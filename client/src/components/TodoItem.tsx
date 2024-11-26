import { Badge, Box, Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useColorModeValue } from "@/components/ui/color-mode"

const TodoItem = ({ todo }: { todo: any }) => {
	const badgeBg = todo.completed
		? useColorModeValue("green.300", "green.300")
		: useColorModeValue("yellow.200", "yellow.200");
	const badgeColor = useColorModeValue("white", "black");
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
				bg={useColorModeValue("white", "gray.800")} // Ensure background contrasts with border
			>
				<Text
					color={todo.completed ? "green.300" : "yellow.200"}
					textDecoration={todo.completed ? "line-through" : "none"}
				>
					{todo.body}
				</Text>
				{todo.completed && (
					<Badge bg={badgeBg} color={badgeColor}>
						Done
					</Badge>
				)}
				{!todo.completed && (
					<Badge bg={badgeBg} color={badgeColor}>
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
