import NFTImage from "../../assets/images/hero-image.png";

import "./NFTSection.css";

const NFTSection = () => {
  return (
    <div className="nft__section__container">
      <div className="nft__section__container__wrapper">
        <div className="nft__image__container">
          <div className="nft__image__box__1">
            <h4 className="text-center nft__box__heading">tunegenius</h4>
            <div className="image__grid border__right">
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
            </div>
          </div>

          <div className="nft__image__box__2">
            <h4 className="text-center nft__box__heading">
              streaming villains
            </h4>
            <div className="image__grid border__left">
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
              <img src={NFTImage} alt="NFT Image" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="text-center nft__box__heading">
            tunegenius nft collections
          </h4>

          <div className="nft__sub__text__container">
          <p className="nft__sub__text">
            Become a part of the most dominant web3 music community with a
            vision to revolutionize the music streaming industry
          </p>
          <p className="nft__sub__text">
            2000 tunegenius superheroes & 500 evil streaming-villains represent
            access to our elite group of members and a 50% revenue share in the
            tunegenius platform
          </p>
          <p className="nft__sub__text">
            1 net = 0.0002% of total future revenue si billion yearly revenue =
            $200k/year for each net holder
          </p>
          <p className="nft__sub__text">
            this concept creates an incentivized workforce of marketing soliders
            to compete with the large streaming giants
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTSection;
