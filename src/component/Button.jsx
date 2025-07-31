const Button = ({ href, text, className, ref }) => {
    return (
        <>
            <a ref={ref} href={href} className={className}>
                {text}
            </a>
        </>
    );
};

export default Button;
