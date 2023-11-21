import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
    const { data: genres } = useGenres();
    return (
        <List>
            {genres.map((item) => (
                <ListItem key={item.id} paddingY="5px">
                    <HStack>
                        <Image
                            boxSize="32px"
                            borderRadius={4}
                            src={getCroppedImageUrl(item.image_background)}
                        />
                        <Text fontSize="lg">{item.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
