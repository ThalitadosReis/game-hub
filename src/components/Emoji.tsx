import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: {
      src: "https://cdn-icons-png.flaticon.com/512/2584/2584582.png",
      alt: "meh",
      boxSize: "25px",
    },
    4: {
      src: "https://cdn-icons-png.flaticon.com/512/2584/2584594.png",
      alt: "recommended",
      boxSize: "25px",
    },
    5: {
      src: "https://cdn-icons-png.flaticon.com/512/2584/2584606.png",
      alt: "exceptional",
      boxSize: "25px",
    },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
