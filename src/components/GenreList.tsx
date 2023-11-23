import {
    HStack,
    List,
    ListItem,
    Image,
    Button,
    // Spinner,
    Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genres /*,isLoading, error*/ } = useGenres();
    // if (error) return null;
    // if (isLoading) return <Spinner />;
    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {genres.map((item) => (
                    <ListItem key={item.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                boxSize="32px"
                                borderRadius={4}
                                src={getCroppedImageUrl(item.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                fontWeight={
                                    selectedGenre?.id === item.id
                                        ? "bold"
                                        : "normal"
                                }
                                fontSize="lg"
                                variant="link"
                                onClick={() => onSelectGenre(item)}
                            >
                                {item.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
