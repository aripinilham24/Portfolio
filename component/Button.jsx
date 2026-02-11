
const Button = ({ href, text, className, ref }) => {
    return (
        <>
            <a ref={ref} href={href} className={className}>
                {text}
            </a>
        </>
    );
};

export const ButtonNav = ({className}) => {
    return (
        <a href="#contact" className={`${className} relative overflow-hidden group rounded-full border border-gray-100 text-gray-100 transition-all duration-300 py-1 px-3`}>
            <span className="relative z-10 text-xs">Contact Me</span>
            <span className="absolute left-0 top-0 h-full w-0 bg-linear-to-r from-blue-800 to-blue-300 transition-all duration-300 group-hover:w-full -skew-x-6" />
        </a>
    )
};
export const ButtonLink = ({className, href, text, hover}) => {
    return (
        <a href={href} className={`${className} relative overflow-hidden group border border-gray-100 text-gray-100 transition-all duration-300`}>
            <span className="relative z-10">{text}</span>
            <span className="absolute -left-1 top-0 h-full w-0 bg-linear-to-r from-blue-800 to-blue-300 transition-all duration-600 group-hover:w-xs -skew-x-6" />
        </a>
    )
};



export default Button;
