import type { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata={title:"Thank You",description:"Your enquiry has been received by G12 Accounts.",robots:{index:false,follow:false},alternates:{canonical:"/thank-you/"}};

export default function ThankYouPage(){return <main className="thank-you"><div className="thank-you__orbit" aria-hidden="true"/><div className="thank-you__orb" aria-hidden="true"/><section><div className="thank-you__status">Enquiry received</div><h1>Thank you.<br/>We’ll be in <em>touch.</em></h1><p>Your message has reached the G12 Accounts team. One of our specialists will review your enquiry and contact you with a clear next step.</p><div className="thank-you__actions"><Link className="button button--primary" href="/">Return to homepage <span>↗</span></Link><a className="text-link text-link--light" href="https://g12accounts.ae/insights/">Explore our insights</a></div></section><p className="thank-you__note"><span/>Your information is handled confidentially.</p></main>}
