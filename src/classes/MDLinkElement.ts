import { MDElement } from "./MDElement";

export class MDLinkElement extends MDElement {
    protected tag: string = 'a';

    private href: string = ''
    private content: string = ''

    constructor(s: string) {
        super()
        this.parse(s)
    }

    // [EFF](https://eff.org)
    parse(s: string): boolean {
        const hrefAr = s.match(/\[.+\]/)
        if(Array.isArray(hrefAr) && hrefAr.length > 0){
            this.href = hrefAr[0].replace(/\[|\]/g, '')
        }
        else {
            return false
        }

        const contentAr = s.match(/\(.+\)/)
        if(Array.isArray(contentAr) && contentAr.length > 0){
            this.content = contentAr[0].replace(/\(|\)/g, '')
        }
        else {
            return false
        }

        return true
    }

    render(): string {
        return `<a href="${this.href}">${this.content}</a>`
    }

    static is(s: string) {
        return /\[.+\]\(.+\)/.test(s)
    }
}