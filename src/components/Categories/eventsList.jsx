import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import MusicNoteSharpIcon from "@mui/icons-material/MusicNoteSharp";
import LocalMoviesSharpIcon from "@mui/icons-material/LocalMoviesSharp";
import TheaterComedySharpIcon from "@mui/icons-material/TheaterComedySharp";

const eventsList = [
  {
    id: 2,
    label: "Sports",
    type: "sports",
    icon: <SportsBasketballIcon />,
  },
  {
    id: 1,
    label: "Concerts",
    type: "concerts",
    icon: <MusicNoteSharpIcon />,
  },
  {
    id: 3,
    label: "Movies",
    type: "movies",
    icon: <LocalMoviesSharpIcon />,
  },
  {
    id: 4,
    label: "Theater",
    type: "theater",
    icon: <TheaterComedySharpIcon />,
  },
];

export default eventsList;
