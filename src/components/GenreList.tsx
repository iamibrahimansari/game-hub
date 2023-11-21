import {
    HStack,
    List,
    ListItem,
    Image,
    Button,
    Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
    const { data: genres, isLoading, error } = useGenres();
    if (error) return null;
    if (isLoading) return <Spinner />;
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
                        <Button
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
    );
};

export default GenreList;
