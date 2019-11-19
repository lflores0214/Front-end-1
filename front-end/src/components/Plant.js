import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
    display: flex;
    align-items: center;
    background-color: #235B2D;
    height: 7vh;
`;

const H1Style = styled.h1`
    width: 50%;
    display: flex;
    padding-left: 10px;
    color: white;

`;

const H4Style = styled.h4`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
    color: white;
`;

const MainContain = styled.div`
    height: 93vh;
    width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ImageDiv = styled.div`
    width: 80%;
    padding-bottom: 20px;
    margin: 0 auto;
`;
const Plant = () => {
    return (
        <div>
            <NavStyle>
                <H1Style>Plant Parenthood</H1Style>
                <H4Style>Icon</H4Style>
            </NavStyle>
            <MainContain>
                <h2>Nickname: Planty Planterson</h2>
                <ImageDiv>
                    <img src="https://www.fillmurray.com/200/300" alt="placeholder murray" />
                </ImageDiv>
                <h3>Species: Succulent</h3>
                <h3>Location: Kitchen Window</h3>
                <h3>Mark as Watered</h3>
                <h3>Last Time Watered: </h3>
                <button className="button-style-plant">Edit</button>
                <button className="button-style-plant">Delete</button>
            </MainContain>
        </div>
    );
}

export default Plant