import { getCssText } from "../../stitches.config";

export function Styles() {
  return (
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
  );
}
