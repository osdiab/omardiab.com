/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="@emotion/react/types/css-prop" />

declare module "*.svg" {
  const ReactComponent: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  const content: string;

  export { ReactComponent };
  export default content;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}
