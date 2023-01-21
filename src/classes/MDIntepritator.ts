export class MDInterpritator {
    private readonly input: HTMLTextAreaElement
    private readonly output: HTMLElement

    constructor(input: HTMLTextAreaElement, output: HTMLElement){
        this.input = input
        this.output = output
    }

    read(){}
    compile(){}
    render(){}
    init(){}
}