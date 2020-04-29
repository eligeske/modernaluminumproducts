import Head from "next/head";

function Layout({ content }) {
  return (
    <div>
      <Head>
        <title>
          Screen Enclosures, Insulated Roofs, Porches, Modern Aluminum Products,
          Inc., Ft. Lauderdale, FL
        </title>
        <meta
          name="Keywords"
          content="modern aluminum products, inc., south florida, home additions, screen enclosures, aluminum fence, accordion shutters, carports, driveways, my safe florida home, certified contractor, ft. lauderdale"
        />
        <meta
          name="Description"
          content="Modern Aluminum Products, Inc. is South Florida's hurricane protection specialist. The oldest company in Ft. Lauderdale, we build screen enclosures, fences, concrete patios, carports, accordion shutters and more!"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="modernaluminumproducts.css" rel="stylesheet" type="text/css" />
      </Head>
      <div id="container">
        <div
          id="header"
          title="Protect your investment! Call us today at 954-522-3825 or 561-338-5055! We have been family owned and operated since 1960 and are the oldest aluminum company in Ft. Lauderdale."
        >
          <a name="top" id="top">
            Hero
          </a>
        </div>
        <div id="sidebar">
          <ul id="mainnav">
            <li>
              <a
                href="index.html"
                title="Welcome to Modern Aluminum Products, Inc.!"
              >
                Welcome
              </a>
            </li>
            <li>
              <a
                href="screen-pool-enclosures.html"
                title="A screen or pool enclosure protects and extends living space. Learn more about our enclosure installation services."
              >
                Screen Enclosures
              </a>
            </li>
            <li>
              <a
                href="fence-aluminum.html"
                title="One of the easiest ways to improve security around their property is through a sturdy aluminum fence. Learn more about our in many available styles."
              >
                Fence
              </a>
            </li>
            <li>
              <a
                href="shutters-accordion.html"
                title="We offer several shutter products designed to keep your family and home safe. Learn more about our accordion shutters and aluminum panels."
              >
                Shutters
              </a>
            </li>
            <li>
              <a
                href="porches-screen.html"
                title="A popular way to enjoy the outdoors without the annoyances of insects or weather is the addition of a screen to your porch."
              >
                Porches
              </a>
            </li>
            <li>
              <a
                href="aluminum-roofs-carports.html"
                title="We can enhance your house or mobile home with several of our products including carports and utility sheds."
              >
                Aluminum Roofs/Carports
              </a>
            </li>
            <li>
              <a
                href="contact-us-contractor.html"
                title="We welcome your additional questions! Contact us online for more information."
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="gallery-photos.html"
                title="View our gallery of completed projects."
              >
                Gallery
              </a>
            </li>
          </ul>
          <img
            src="images/logos.gif"
            alt="We are members of the Aluminum Association of Florida and the International Hurricane Protection Association."
            width="200"
            height="71"
            title="We are members of the Aluminum Association of Florida and the International Hurricane Protection Association."
          />
          <p>
            <strong>A+ Rating with the Better Business Bureau</strong>
          </p>
          <address>
            <span className="businessname">
              Modern Aluminum <br />
              Products, Inc.
            </span>
            <br />
            6878 NW 20th Ave
            <br />
            Fort Lauderdale, FL 33309
            <br />
            954-522-3825
            <br />
            561-338-5055
            <br />
            Serving Broward, Dade
            <br />
            and Palm Beach Counties.
            <br />
            <br />
            License# CGC017610 <br />
            General Contractor
            <br />
            Licensed and Insured
            <br />
          </address>
        </div>
        <div id="content">
          {content}
          <div id="payment">
            <h4>Payment Information</h4>
            <img
              src="images/credit_cards.gif"
              alt="We accept Visa, MasterCard and Discover."
              width="104"
              height="23"
              className="rt"
              title="We accept Visa, MasterCard and Discover."
            />
            <p>Financing Available</p>
          </div>
        </div>
        <div id="footer">
          <div id="subnav">
            <a href="index.html">Welcome</a> :{" "}
            <a href="screen-pool-enclosures.html">Screen Enclosures</a> :{" "}
            <a href="fence-aluminum.html">Fence</a> :{" "}
            <a href="shutters-accordion.html">Shutters</a> :{" "}
            <a href="porches-screen.html">Porches</a> :{" "}
            <a href="aluminum-roofs-carports.html">Aluminum Roofs/Carports</a> :{" "}
            <a href="contact-us-contractor.html">Contact Us</a> :{" "}
            <a href="gallery-photos.html">Gallery</a>
          </div>
          <div id="copyright">
            <br className="clear" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
