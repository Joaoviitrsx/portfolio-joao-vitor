import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <a href="#" aria-label="LinkedIn">
        <FaLinkedin size={28} />
      </a>

      <a href="#" aria-label="GitHub">
        <FaGithub size={28} />
      </a>

      <a href="#" aria-label="Download do currículo">
        <FiDownload size={28} />
      </a>
    </div>
  );
}

export default SocialLinks;
