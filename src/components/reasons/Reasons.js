import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt='grid-1' />
        <img src={image2} alt='grid-2' />
        <img src={image3} alt='grid-3' />
        <img src={image4} alt='grid-4' />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt='tick' />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt='tick' />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt='tick' />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt='tick' />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{
          color: 'var(--gray)',
          fontWeight: 'normal'
        }}>
          OUR PARTNERS
        </span>

        <div className="partners">
          <img src={nb} alt='partner'/>
          <img src={adidas} alt='partner'/>
          <img src={nike} alt='partner'/>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
