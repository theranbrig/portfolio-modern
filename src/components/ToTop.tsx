import ToTopStyles from './styles/ToTopStyles';

export const ToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <ToTopStyles>
            <button onClick={scrollToTop}>Top</button>
        </ToTopStyles>
    );
};
