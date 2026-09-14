import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionLabel } from "@/components/section-label";

export const metadata:Metadata={title:"Privacy Policy",description:"Privacy information for visitors to the G12 Accounts website.",alternates:{canonical:"/privacy-policy/"},robots:{index:true,follow:true}};

const sections=[
{title:"Who we are",body:["Our website address is https://g12accounts.ae."]},
{title:"Comments",body:["When visitors leave comments, the site collects the data shown in the comments form, together with the visitor’s IP address and browser user-agent string to help spam detection.","An anonymized string created from your email address may be provided to the Gravatar service. After approval of a comment, a profile picture may be visible publicly in the context of that comment."]},
{title:"Media",body:["If you upload images to the website, avoid uploading images with embedded location data such as EXIF GPS. Visitors may be able to download and extract location data from images."]},
{title:"Cookies",body:["If you leave a comment, you may opt in to saving your name, email address and website in cookies for convenience. These cookies last for one year.","A visit to the login page may set a temporary cookie to determine whether your browser accepts cookies. Login and screen-preference cookies may also be set for registered users.","Editing or publishing an article may save an additional cookie containing no personal data and indicating the post ID of the article."]},
{title:"Embedded content",body:["Articles may include embedded content such as videos, images or articles. Embedded content behaves as if the visitor had visited the originating website, which may collect data, use cookies or monitor interactions."]},
{title:"Who we share your data with",body:["If you request a password reset, your IP address may be included in the reset email."]},
{title:"How long we retain your data",body:["Comments and their metadata may be retained so follow-up comments can be recognized and approved.","For registered users, the site stores the personal information provided in their profile. Users can view, edit or delete most profile information; website administrators can also view and edit it."]},
{title:"Your data rights",body:["If you have an account or have left comments, you can request an exported file of personal data held about you and request erasure, excluding data retained for administrative, legal or security purposes."]},
{title:"Where your data is sent",body:["Visitor comments may be checked through an automated spam-detection service."]}
];

export default function PrivacyPage(){return <main><PageHero index="05" label="Privacy" title={<>Privacy<br/><em>Policy.</em></>} description="Information about how website data may be collected, used and retained."/><section className="section policy"><SectionLabel number="01">Website privacy</SectionLabel><div className="policy__layout"><aside><p>G12 Accounts website policy</p><a href="mailto:finance@g12.ae">Privacy enquiries ↗</a></aside><div className="policy__content">{sections.map((section,index)=><section key={section.title}><span>{String(index+1).padStart(2,"0")}</span><div><h2>{section.title}</h2>{section.body.map(text=><p key={text}>{text}</p>)}</div></section>)}</div></div></section></main>}
