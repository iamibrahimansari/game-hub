import { Image, ImageProps } from "@chakra-ui/react";

import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
    rating: number;
}

const emojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
};

const Emoji = ({ rating }: Props) => {
    return <Image {...emojis[rating]} marginTop={1} />;
};

export default Emoji;
