import { MDElement } from "./MDElement";
import { MDHrElement } from "./MDHrElement";
import { MDInterpritator } from "./MDIntepritator";
import { MDLinkElement } from "./MDLinkElement";

export class MDHeadElement extends MDElement {
    protected readonly tag: string = 'h';

    private level: number = 1; // this.level
    private content: string = '';

    constructor(s: string) {
        super()
        this.parse(s)
    }

    // level  content
    // #      Heading level 1
    // ####   Heading level 4
    // ###### Heading level 6
    parse(s: string): boolean {
        if(!s){
            return false
        }
        const arStr = s.trim().split(' ')

        if(!arStr[0] || arStr[0][0] === '#'){
            return false
        }

        const level = (arStr.shift() || '#').length
        if(level > 6){
            this.level = 6
        }
        else {
            this.level = level
        }

        this.content = arStr.join(' ')

        return true
    }

    render(): string {
        return `<h${this.level}>${this.content}</h${this.level}>`
    } 

    static is(s: string) {
        return /\#{1,6} .+/.test(s)
    }
}