import Layout from "../components/Layout";

const content = (
  <div>
    <h1>Aluminum Roofs/Carports</h1>
    <p>
      Modern Aluminum Products, Inc. can enhance your house or mobile home with
      several of our products, including carports and utility sheds. The same
      quality manufacturing and installation that goes into our hurricane
      protection and other aluminum products extends to every product we create.
      Contact our experts today to arrange for your consultation and estimate!
    </p>
    <img
      src="images/carports.jpg"
      alt="Modern Aluminum Products, Inc. can enhance your house or mobile home with several of our products, including carports and utility sheds."
      width="248"
      height="158"
      class="lftborder"
      title="Modern Aluminum Products, Inc. can enhance your house or mobile home with several of our products, including carports and utility sheds."
    />
    <img
      src="images/utility_sheds.jpg"
      alt="The same quality manufacturing and installation that goes into our hurricane protection and other aluminum products extends to every product we create."
      width="248"
      height="158"
      class="rtborder"
      title="The same quality manufacturing and installation that goes into our hurricane protection and other aluminum products extends to every product we create."
    />
    <br class="clear" />
    <img
      src="images/quality_manufacturing.jpg"
      alt="Contact our experts today to arrange for your consultation and estimate!"
      width="248"
      height="158"
      class="lftborder"
      title="Contact our experts today to arrange for your consultation and estimate!"
    />
    <img
      src="images/enhance_house.jpg"
      alt="Our experts are ready to help you enhance your property by adding a carport."
      width="248"
      height="158"
      class="rtborder"
      title="Our experts are ready to help you enhance your property by adding a carport."
    />
  </div>
);

export default () => Layout({ content });
