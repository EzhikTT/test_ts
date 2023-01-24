import { MDElement } from "./MDElement";

export class MDParagraphElement extends MDElement {
    protected readonly tag: string = 'p';

    private content: string = '';

    constructor(s: string) {
        super()
        this.parse(s)
    }

    parse(s: string): boolean {
        if(!s){
            return false
        }
        this.content = s
        return true
    }

    render(): string {
        return `<p>${this.content}</p>`
    }  

    static is(s: string) {
        return true
    }
}