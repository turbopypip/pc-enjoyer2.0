import { MouseEvent } from "react";

export default function HandleClickScroll (e:MouseEvent<HTMLAnchorElement>, id:string) {
  e.preventDefault()
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}