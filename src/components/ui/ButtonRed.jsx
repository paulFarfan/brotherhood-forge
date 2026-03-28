import AnimatedButton from "./AnimatedButton";
import { joinLinkProps } from "../../config/site";

export default function ButtonRed({ text, className }) {
  return (
    <AnimatedButton className={className} {...joinLinkProps()}>
      {text}
    </AnimatedButton>
  );
}
