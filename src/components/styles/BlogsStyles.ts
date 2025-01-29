'use client';

import styled from 'styled-components';

const BlogsStyles = styled.div`
    background-color: ${(props) => props.theme.black};
    margin: 0 auto;
    padding: 40px 0 15vh;
    color: ${(props) => props.theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p.dev {
        text-align: center;
        font-size: 1.2rem;
        a {
            color: ${(props) => props.theme.darkBlue};
            text-decoration: none;
        }
    }
    .posts {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        width: 1200px;
        margin-top: 30px;
        max-width: 90vw;
        margin: 50px auto;
        @media (max-width: 1024px) {
            grid-template-columns: 1fr;
            .post-container {
                width: 100%;
            }
        }
    }
    .post-container {
        width: 100%;
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 8fr;
        grid-gap: 20px;
        align-items: center;
        padding: 20px;
        border-radius: 10px;
        min-height: 180px;
        transition: 0.5s;
        position: relative;
        img {
            width: 200px;
            border-radius: 5px;
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.2;
            background: ${(props) => props.theme.white};
            border-radius: 10px;
            transition: 0.5s;
        }
        h2 {
            font-weight: bold;
        }
        &:hover {
            cursor: pointer;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: ${(props) => props.theme.darkBlue};
                opacity: 0.2;
            }
        }
        @media (max-width: 1024px) {
            width: 90%;
            grid-template-columns: none;
            grid-template-rows: 4fr 3fr;
            img {
                width: 100%;
            }
        }
    }
    .post-description {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        font-size: 3rem;
        color: ${(props) => props.theme.darkBlue};
        font-family: ${(props) => props.theme.raleFont};
        font-weight: 300;
        text-align: center;
    }
    h2 {
        font-family: ${(props) => props.theme.raleFont};
        font-weight: 300;
        color: ${(props) => props.theme.darkBlue};
        margin: 0;
        font-size: 1.4rem;
        min-height: 3rem;
    }
    p {
        font-family: ${(props) => props.theme.robFont};
        font-weight: 300;
        margin: 0;
    }
    .date {
        margin-top: 10px;
    }
`;

export default BlogsStyles;
