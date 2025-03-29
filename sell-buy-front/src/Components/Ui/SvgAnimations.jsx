import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function SignFormRightSideSvg({ containerClass, title, svgClass }) {
  return (
    <div className={containerClass}>
      <h1>{title}</h1>
      <div className={svgClass}>
        {/* <DotLottieReact
          src="https://lottie.host/7fcce994-31ae-490e-862b-2393facdb71c/fJ4VLOpVv0.lottie"
          loop
          autoplay
        /> */}
      </div>
    </div>
  );
}
