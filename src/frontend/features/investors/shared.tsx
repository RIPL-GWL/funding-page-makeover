import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/frontend/components/ui/button';
import portrait0Asset from "@/assets/person-portrait-0.webp";
const portrait0 = portrait0Asset;
import portrait1Asset from "@/assets/person-portrait-1.webp";
const portrait1 = portrait1Asset;
import portrait2Asset from "@/assets/person-portrait-2.webp";
const portrait2 = portrait2Asset;
import portrait3Asset from "@/assets/person-portrait-3.webp";
const portrait3 = portrait3Asset;
import portrait4Asset from "@/assets/person-portrait-4.webp";
const portrait4 = portrait4Asset;
import portrait5Asset from "@/assets/person-portrait-5.webp";
const portrait5 = portrait5Asset;
const portraits = [portrait0, portrait1, portrait2, portrait3, portrait4, portrait5];
export function Portrait({index,name,large=false}:{index:number;name:string;large?:boolean}) { return <div className={`investor-portrait individual-portrait${large?' portrait-large':''}`}><img src={portraits[index] ?? portrait0} alt={`${name} — sample portrait`} width={384} height={384} decoding="async" loading={large?'eager':'lazy'}/></div>; }
export function ContactButton({children='Connect with Investor',outline=false}:{children?:React.ReactNode;outline?:boolean}) { return <Button asChild variant={outline?'outline':'default'}><Link to='/contact'>{children}<ArrowRight/></Link></Button>; }
export function SectionHeading({children,eyebrow}:{children:React.ReactNode;eyebrow?:string}) { return <div className='investor-heading'>{eyebrow&&<p className='investor-eyebrow'>{eyebrow}</p>}<h2>{children}</h2></div>; }
