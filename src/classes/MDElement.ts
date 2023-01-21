export abstract class MDElement {
    abstract tag: string

    abstract parse(s: string): boolean
    abstract render(): string
}

interface test{
    test(): string
}

class Test implements test {
    test(): string {
        return ''
    }
}

class Element extends MDElement {

}