import styled from 'styled-components';

const ToTopStyles = styled.div`
    position: fixed;
    right: 20px;
    bottom: 80px;
    button {
        padding: 10px 20px;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme.blue};
        cursor: pointer;
        &:hover {
            color: ${(props) => props.theme.orange};
        }
`;

export default ToTopStyles;
