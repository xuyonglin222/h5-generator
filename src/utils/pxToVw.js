//手机端（ipx）
export function px2vw(pxWidth) {
  return `${(pxWidth * 100) / 750}vw`;
}
export function px2vh(pxHeight) {
  return `${(pxHeight * 100) / 1334}vh`;
}
