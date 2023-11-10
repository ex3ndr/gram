import { isBlank } from "./isBlank";

export function indentWidth(src: string) {
    for (let i = 0; i < src.length; i++) {
        if (!isBlank(src[i])) {
            return i;
        }
    }
    return src.length;
}