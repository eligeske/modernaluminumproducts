import Layout from "../components/Layout";

const content = (
  <div>
    <h1>Screen Porches</h1>
    <p>
      A popular way to enjoy the outdoors without the annoyances of insects or
      weather is the addition of a screen to your porch. This type of home
      improvement will also extend your living space, creating a protected area
      for family gatherings or quiet evenings. Modern Aluminum Products, Inc.
      has helped homeowners across South Florida expand their comfort zone
      through a screen porch – contact our experts today to arrange for your
      consultation and estimate!
    </p>
    <img
      src="images/enjoy_outdoors.jpg"
      alt="A popular way to enjoy the outdoors without the annoyances of insects or weather is the addition of a screen to your porch."
      width="248"
      height="158"
      class="lftborder"
      title="A popular way to enjoy the outdoors without the annoyances of insects or weather is the addition of a screen to your porch."
    />
    <img
      src="images/screen_porches.jpg"
      alt="This type of home improvement will also extend your living space, creating a protected area for family gatherings or quiet evenings."
      width="248"
      height="158"
      class="rtborder"
      title="This type of home improvement will also extend your living space, creating a protected area for family gatherings or quiet evenings."
    />
    <br class="clear" />
    <ul class="leftul">
      <li>Outdoor Living Space</li>
      <li>3” Insulated Roof</li>
    </ul>
    <ul class="leftul">
      <li>Fan Beams</li>
      <li>Bugs-Be-Gone!</li>
    </ul>
    <br class="clear" />
    <img
      src="images/protected_area.jpg"
      alt="We have helped homeowners across South Florida expand their comfort zone through a screen porch."
      width="248"
      height="158"
      class="lftborder"
      title="We have helped homeowners across South Florida expand their comfort zone through a screen porch."
    />
    <img
      src="images/comfort_zone.jpg"
      alt="Contact our experts today to arrange for your consultation and estimate!"
      width="248"
      height="158"
      class="rtborder"
      title="Contact our experts today to arrange for your consultation and estimate!"
    />
  </div>
);

export default () => Layout({ content });
