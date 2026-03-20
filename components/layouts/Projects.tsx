import { useState, useEffect } from "react";
import ProjectsBox from "../common/ProjectsBox";
import { dataProjects } from "../../dataKomponen";
import { motion } from "motion/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Projects = () => {
   const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
  
    useEffect(() => {
      const checkScreen = () => {
        setIsMobile(window.innerWidth <= 760);
      };
  
      checkScreen();
      window.addEventListener("resize", checkScreen);
  
      return () => window.removeEventListener("resize", checkScreen);
    }, []);
  
    if (isMobile === null) return null;
  
    const itemsPerPage = isMobile ? 2 : 6;
  const totalPages = Math.ceil(dataProjects.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataProjects.slice(indexOfFirstItem, indexOfLastItem);
  const [paginationBtn, paginationLink] = [
    "text-blue-300 hover:text-blue-300 hover:bg-blue-300/0 hover:border hover:border-blue-300",
    "text-blue-300 bg-blue-300/0 hover:bg-blue-300",
  ];
  return (
    <section id="projects" className="section bg-gray-950">
      <div className="title">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          My Projects
        </motion.h1>
        <h2>Turning Ideas into Digital Reality</h2>
        <p>
          Explore the work I’ve brought to life from concept to launch. Each
          project is a story of collaboration, creativity, and problem-solving.
        </p>
      </div>
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {currentItems.map((certif, index) => (
          <ProjectsBox key={index} {...certif} />
        ))}
      </div>

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className={paginationBtn}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink
                isActive={currentPage === i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={currentPage === i + 1? `border-blue-300 ${paginationLink}` : paginationLink}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className={paginationBtn}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default Projects;
