function ImageCard({ name, url }) {

    const downloadImage = async () => {
        try {
            const response = await fetch(url);
            const blob = await response.blob();

            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = name + ".svg";
            link.click();

            URL.revokeObjectURL(link.href);
        } catch (error) {
            console.error("Download failed:", error);
        }
    };

    return (
        <div className="image-card">
            <img
                className="svg-image"
                src={url}
                alt={name}
            />
            <p className="image-title">{name}</p>
            <button className="svg-button" onClick={downloadImage}>
                Download
            </button>
        </div>
    );
}

export default ImageCard;