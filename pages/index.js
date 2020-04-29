import Layout from "../components/Layout";

export default () =>
  Layout({
    content: (
      <div>
        <h1>Welcome</h1>
        <br class="clear" />
        <img
          src="images/products.jpg"
          alt="Homeowners across South Florida know for quality home additions such as screen enclosures, aluminum fence, accordion shutters, carports and driveways, the company to rely on is Modern Aluminum Products, Inc., the oldest company in Ft. Lauderdale."
          width="250"
          height="295"
          border="0"
          usemap="#Map2"
          class="rt"
          title="Homeowners across South Florida know for quality home additions such as screen enclosures, aluminum fence, accordion shutters, carports and driveways, the company to rely on is Modern Aluminum Products, Inc., the oldest company in Ft. Lauderdale."
        />
        <map name="Map2" id="Map2">
          <area
            shape="rect"
            coords="-71,-2,121,142"
            href="screen-pool-enclosures.html"
            alt="Learn more about our screen and pool enclosure installation services."
            title="Learn more about our screen and pool enclosure installation services."
          />
          <area
            shape="rect"
            coords="-9,148,120,315"
            href="shutters-accordion.html"
            alt="Learn more about our accordion shutter and aluminum panel installation services."
            title="Learn more about our accordion shutter and aluminum panel installation services."
          />
          <area
            shape="rect"
            coords="127,-28,280,141"
            href="fence-aluminum.html"
            alt="Learn more about our aluminum fence installation services."
            title="Learn more about our aluminum fence installation services."
          />
          <area
            shape="rect"
            coords="127,148,259,306"
            href="porches-screen.html"
            alt="Learn more about our screen porch installation services."
            title="Learn more about our screen porch installation services."
          />
        </map>
        <p>
          Homeowners across South Florida know for quality home additions such
          as <a href="screen-pool-enclosures.html">screen enclosures</a>,{" "}
          <a href="fence-aluminum.html">aluminum fence</a>,{" "}
          <a href="shutters-accordion.html">accordion shutters</a>,{" "}
          <a href="aluminum-roofs-carports.html">carports and driveways</a>, the
          company to rely on is <strong>Modern Aluminum Products, Inc.</strong>,
          the oldest company in Ft. Lauderdale. We are a My Safe Florida Home
          certified contractor, A+ rated by the Better Business Bureau, as well
          as a member of the Aluminum Association of Florida.
        </p>
        <p>
          Modern Aluminum Products, Inc. was founded in 1960 by Charles Klement,
          Sr., who operated our company until his retirement in 1995. Since
          then, Charles &ldquo;Chip&rdquo; Klement, Jr. has been president of
          the company. We are a family owned business, still in the{" "}
          <em>same location</em> for 47 years with the{" "}
          <em>same telephone numbe</em>r. Call us today to discuss your ideas
          with our experts and arrange for a consultation and estimate!
        </p>
      </div>
    )
  });
