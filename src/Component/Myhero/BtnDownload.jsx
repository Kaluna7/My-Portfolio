import './BtnDownload.css'
import { useState } from "react";

export default function BtnDownload({ label, varian, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    // Cek apakah varian mengandung "transparent" atau "download"
    const isTransparent = varian?.includes("transparent");
    const isDownload = varian?.includes("download");

    const styles = isTransparent 
        ? { 
            backgroundColor: isHovered ? "black" : "#161513",
            color: isHovered ? "yellow" : "white"
          } 
        : {};

    if (isDownload) {
        return (
            <li>
                <a 
                    href="/CV.pdf" 
                    download="Kaluna_CV.pdf"
                    className="btn-download"
                    style={styles}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {label}
                </a>
            </li>
        );
    }

    return (
        <li>
            <button 
                className="btn-download" 
                style={styles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >
                {label}
            </button>
        </li>
    );
}
