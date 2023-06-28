import { MouseEvent } from "react";
const getBehaviorStyle = (behavior: "auto" | "smooth" | undefined) => {
  if (behavior) {
    return behavior;
  } else {
    return "smooth";
  }
};
export default function HandleClickScroll(
  e: MouseEvent<HTMLAnchorElement>,
  id: string,
  behavior?: "auto" | "smooth"
) {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: getBehaviorStyle(behavior) });
  }
}
