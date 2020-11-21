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
  minFontSize: number,
  maxFontSize: number,
  minBreakpoint = 320,
  maxBreakpoint = 992,
  viewportWidth = 100
) {
  return `
    @media (min-width: ${minBreakpoint}px) and (max-width: ${maxBreakpoint}px) {
      font-size: calc(${minFontSize}px + (${maxFontSize} - ${minFontSize}) * ((${viewportWidth}vw - ${minBreakpoint}px) / (${maxBreakpoint} - ${minBreakpoint})))
    }
  `;
}
