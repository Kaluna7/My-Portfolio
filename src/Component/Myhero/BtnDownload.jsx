import './BtnDownload.css'
import { useState } from "react";

export default function BtnDownload({ label, varian }) {
    const [isHovered, setIsHovered] = useState(false);

    const styles = varian === "transparent" 
        ? { 
            backgroundColor: isHovered ? "rgba(22, 21, 19, 0.8)" : "#161513",
            color: isHovered ? "yellow" : "white"
          } 
        : {};

    return (
        <li>
            <button 
                className="btn-download" 
                style={styles}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {label}
            </button>
        </li>
    );
}
