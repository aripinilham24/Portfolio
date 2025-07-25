const CertificatesBox = ({ title, desc, img, link }) => {
    return (
        <div className="col">
            <div className="card h-100">
                <img
                    src={img}
                    className="card-img-top"
                    alt="thumbnail certificate"
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={link} className="btn btn-primary">
                        See Certificate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CertificatesBox;
