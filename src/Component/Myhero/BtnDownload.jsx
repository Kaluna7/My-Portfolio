import './BtnDownload.css';


export default function BtnDownload({label,varian}){
        const styles = varian === "transparent" ? { backgroundColor: '#161513',color:'white'} : {};

    return (
        <li>
            <button className="btn-download" style={styles}>{label}</button>
        </li>
    )
}
