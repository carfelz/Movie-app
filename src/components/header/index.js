import React from "react";
// images 
import MovieLogo from "../../images/react-movie-logo.svg";
import TMDBLogoImg from "../../images/tmdb_logo.svg";

// component
import { Wrapper, Content, LogoImg, TMDBLogo } from "./header.style";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={MovieLogo} alt='logo-image'/>
            <TMDBLogo src={TMDBLogoImg} alt='tmdb-logo-img'/>
        </Content>
    </Wrapper>
)

export default Header