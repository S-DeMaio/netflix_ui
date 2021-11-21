import { HeroButton, HeroContainer, HeroDescription, HeroTitle } from "./Hero.styles";

export default function Hero({ movie }) {
    console.log(movie);
    return (
        <HeroContainer background={movie?.backdrop_path}>
            <HeroTitle>{movie?.name}</HeroTitle>
            <HeroDescription>{movie?.overview}</HeroDescription>
            <HeroButton>Play</HeroButton>
            <HeroButton>My List</HeroButton>
        </HeroContainer>
    )
};