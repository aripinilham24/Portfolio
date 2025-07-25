import CertificatesBox from "../component/CertificatesBox";
import { dataCertif } from "../dataKomponen";

const Certificates = () => {
    return (
        <section id="certificates" className="p-3">
            <div className="title">
                <h1 className="fw-bold text-center">CERTIFICATES</h1>
            </div>
            <div className="card-group-certificates row row-cols-1 row-cols-md-3 g-4">
                {dataCertif.map((certi, index) => (
                    <CertificatesBox key={index} {...certi} />
                ))}
                
            </div>
        </section>
    );
};

export default Certificates;