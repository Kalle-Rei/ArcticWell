import Head from "next/head";
import Link from "next/link";



// @TODO: fix links and apply styles correctly
const More = () => {
  return (
    <div>
      <Head>
        <title>More</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="more-div">
      <Link href="/about"><h1 className="more-links">About us</h1></Link>
      <hr className=".more-hr"></hr>
      <Link href="/boxes"><h1 className="more-links">Our boxes</h1></Link>
      <hr className=".more-hr"></hr>
      <Link href="/rent"><h1 className="more-links">Rent-a-box</h1></Link>
      <hr className=".more-hr"></hr>
      <Link href="/health"><h1 className="more-links">Health benefits</h1></Link>
      <hr className=".more-hr"></hr>
      <Link href="/contact"><h1 className="more-links">Contact us</h1></Link>
      <hr className=".more-hr"></hr>

      <p className="more-footer">Designed by Arctic Well in Sweden.</p>
      </div>
    </div>
  );
};

export default More;
