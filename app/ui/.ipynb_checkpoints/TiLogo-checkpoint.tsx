import Image from 'next/image';

export default function TiLogo() {
  return (
    <Image src="/tilogo.png" width={"392"} height={"236"} alt="Titanium Robotics Wordmark" className = "h-full w-auto"/>
  );
}