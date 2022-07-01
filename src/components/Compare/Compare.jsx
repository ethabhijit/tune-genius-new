import NFTImage from "../../assets/images/hero-image.png";

import "./Compare.css";

const Compare = () => {
  return (
    <div className="compare__section__container">
      <div className="compare__section__container__wrapper">
        <h4 className="text-center nft__box__heading">
          tunegenius v.s. streaming genius
        </h4>
        <p className="sub__text">an in depth comparison</p>
        <div className="compare__image__container">
          <div className="compare__box compare__border__right">
            <p className="compare__sub__text">
              - paid directly after each stream
            </p>
            <p className="compare__sub__text">
              - set price/stream - 0.00001 ETH ($0.012 USD) 3x more - price
              subject to adjustment by dao vote
            </p>
            <p className="compare__sub__text">
              - fans can invest directly in tune genius music royaties and have
              funds distributed directly into their wallet
            </p>
            <p className="compare__sub__text">
              - the market decide which music we listen to
            </p>
            <p className="compare__sub__text">
              - Artists can bring fans to tune genius and get paid fairly /
              stream & also allow their super fans to invest in their music &
              share in their success.
            </p>
            <p className="compare__sub__text">
              - 2.5% commission taken on each transcation listeners can choose
              to be anonymous and was collect no data
            </p>
          </div>

          <div className="compare__box compare__border__left">
            <p className="compare__sub__text">
              - 90+ days to pay artists
            </p>
            <p className="compare__sub__text">
              - average price/stream - $0.004
            </p>
            <p className="compare__sub__text">
              - No way for fans or investors to invest in music with a potential for R.O.I.
            </p>
            <p className="compare__sub__text">
              - control what music we listen to
            </p>
            <p className="compare__sub__text">
              - artists use resources to push fans to these platforms, will little chance to monetizing their music
            </p>
            <p className="compare__sub__text">
              - ad-based revenue model which incentivizes data collections and understanding their customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compare;
