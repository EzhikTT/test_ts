import { MDHeadElement } from "./MDHeadElement"
import { MDHrElement } from "./MDHrElement"
import { MDLinkElement } from "./MDLinkElement"
import { MDParagraphElement } from "./MDParagraphElement"

export abstract class MDElement {
    protected abstract readonly tag: string

    abstract parse(s: string): boolean
    abstract render(): string

    static is(s: string): boolean {
        return false
    }
}

export abstract class MDElementFactory {
    static createElement(s: string): MDElement {
        if(MDHeadElement.is(s)){
            return new MDHeadElement(s)
        }
        else if(MDLinkElement.is(s)){
            return new MDLinkElement(s)
        }
        else if(MDHrElement.is(s)){
            return new MDHrElement()
        }
        else{
            return new MDParagraphElement(s)
        }
    }
}