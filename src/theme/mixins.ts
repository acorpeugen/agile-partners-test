/**
 * @function
 * @name fluidFontSize
 * @param minFontSize
 * @param maxFontSize
 * @param minBreakpoint
 * @param maxBreakpoint
 * @param viewportWidth
 * @returns Template Literal
 * @description Function return Template Literal(Template String) with styles properties.
 * @author Proca Eugene <acorpeugen@gmail.com>
 */
export function fluidFontSize(
  defaultFontSize: number,
  minFontSize: number,
  maxFontSize: number,
  maxBreakpoint = 991,
  viewportWidth = 100
) {
  return `
    @media only screen and (max-width: ${maxBreakpoint}px) {
      font-size: calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((${viewportWidth}vw) / (${maxBreakpoint})))
    }

    @media (min-width: ${maxBreakpoint + 1}px) {
      font-size: ${defaultFontSize}px
    }

  `;
}
