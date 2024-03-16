import css from "./ImageCard.module.css";

const ImageCard = ({ img, handleImageClick }) => {
  const imgModData = {
    imgSrc: img.urls.regular,
    imgDescription: img.description,
    imgAltDescription: img.alt_description,
  };
  return (
    <div
      className={css.imageBlock}
      onClick={() => handleImageClick(imgModData)}
    >
      <img
        className={css.image}
        src={img.urls.small}
        alt={img.alt_description}
        width="350"
      />
      <div className={css.textWrapper}>
        <p className={css.text}> Likes: {img.likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
