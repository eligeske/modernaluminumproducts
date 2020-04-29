import Layout from "../components/Layout";

const content = (
  <div>
    <h1>Aluminum Fence</h1>
    <p>
      Homeowners know one of the easiest ways to improve security around their
      property is through a sturdy aluminum fence. Available in many styles, a
      fence installed by Modern Aluminum Products, Inc. is a great choice for
      home improvement. Contact our experts today to arrange for your
      consultation and estimate!
    </p>
    <img
      src="images/aluminum_fence.jpg"
      alt="Homeowners know one of the easiest ways to improve security around their property is through a sturdy aluminum fence."
      width="248"
      height="158"
      class="lftborder"
      title="Homeowners know one of the easiest ways to improve security around their property is through a sturdy aluminum fence."
    />
    <img
      src="images/security_fence.jpg"
      alt="Available in many styles, a fence installed by Modern Aluminum Products, Inc. is a great choice for home improvement."
      width="248"
      height="158"
      class="rtborder"
      title="Available in many styles, a fence installed by Modern Aluminum Products, Inc. is a great choice for home improvement."
    />
    <br class="clear" />
    <ul class="leftul">
      <li>Security</li>
      <li>Pool Barrier</li>
      <li>Long Lasting</li>
    </ul>
    <ul class="leftul">
      <li>No Maintenance</li>
      <li>Aesthetically Pleasing</li>
    </ul>
    <br class="clear" />
    <img
      src="images/home_improvement.jpg"
      alt="Our aesthetically pleasing fences do not require maintenance."
      width="248"
      height="158"
      class="lftborder"
      title="Our aesthetically pleasing fences do not require maintenance."
    />
    <img
      src="images/pool_security.jpg"
      alt="Contact our experts today to arrange for your consultation and estimate!"
      width="248"
      height="158"
      class="rtborder"
      title="Contact our experts today to arrange for your consultation and estimate!"
    />
  </div>
);

export default () => Layout({ content });
