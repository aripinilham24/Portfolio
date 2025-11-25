const Footer = () => {
    return (
        <footer
            
            className="bg-gray-900 text-white flex flex-col items-center gap-5 p-5"
        >
            <div className=" flex gap-5 text-2xl md:text-4xl">
                <a href="https://github.com/aripinilham24"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/aripin-ilham-37a443246/"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/muhamadarifinilham24"><i className="bi bi-instagram"></i></a>
            </div>
            <p className="md:text-xl">
                &copy; 2025 Ilham Dev. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
