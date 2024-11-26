import { Box, Flex, Button, Text, Container } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <Container maxW={"900px"}>
            <Box
                bg={theme === "light" ? "gray.400" : "gray.700"}
                px={4}
                my={4}
                borderRadius={"5"}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    {/* LEFT SIDE */}
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={3}
                        display={{ base: "none", sm: "flex" }}
                    >
                        <img src="/react.png" alt="logo" width={50} height={50} />
                        <Text fontSize={"40"}>+</Text>
                        <img src="/go.png" alt="logo" width={40} height={40} />
                        <Text fontSize={"40"}>=</Text>
                        <img src="/explode.png" alt="logo" width={50} height={50} />
                    </Flex>

                    {/* RIGHT SIDE */}
                    <Flex alignItems={"center"} gap={3}>
                        <Text fontSize={"lg"} fontWeight={500}>
                            Daily Tasks
                        </Text>
                        {/* Toggle Color Mode */}
                        <Button onClick={toggleTheme}>
                            {theme === "light" ? <IoMoon /> : <LuSun size={20} />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}