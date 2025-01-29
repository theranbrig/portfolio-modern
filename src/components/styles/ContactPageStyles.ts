'use client';

import styled from 'styled-components';

const ContactPageStyles = styled.div`
    min-height: 90vh;
    background-color: ${(props) => props.theme.black};
    padding-top: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 900px;
    max-width: 90vw;
    .contact-title {
        p {
            color: ${(props) => props.theme.white};
            font-family: ${(props) => props.theme.raleFont};
        }
        h1 {
            font-size: 3rem;
            color: ${(props) => props.theme.blue};
            font-family: ${(props) => props.theme.raleFont};
            font-weight: 100;
            text-align: center;
        }
        p {
            font-size: 1.5rem;
            font-family: ${(props) => props.theme.firaFont};
            text-align: center;
        }
    }
    div.social-icons {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        width: 600px;
        max-width: 90%;
        margin: 0 auto;
        margin-top: 40px;
        a {
            width: 100%;
            font-family: ${(props) => props.theme.raleFont};
            text-decoration: none;
            text-align: center;
            p {
                padding: 5px;
                font-size: 1rem;
                color: ${(props) => props.theme.white};
            }
            img {
                height: 3rem;
                padding: 5px;
                @media (max-width: 900px) {
                    font-size: 2.8rem;
                }
                &:hover {
                    background: #dcdcdc2f;
                    border-radius: 5px;
                }
            }
        }
    }
    .contact {
        width: 100vw;
    }
    .bottom-writing {
        max-width: 90%;
        margin: 20px auto 0;
        width: 520px;

        p {
            color: ${(props) => props.theme.white};
            font-family: ${(props) => props.theme.robFont};
            letter-spacing: 0.05rem;
            line-height: 1.7;
            font-size: 1rem;
            @media (max-width: 900px) {
                width: 100%;
                margin: 0;
            }
            a {
                color: ${(props) => props.theme.blue};
                text-decoration: none;
            }
        }
    }
`;

export default ContactPageStyles;
