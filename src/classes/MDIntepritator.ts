import { MDElement, MDElementFactory } from "./MDElement"

export class MDInterpritator {
    private readonly input: HTMLTextAreaElement
    private readonly output: HTMLElement

    private mdElements: MDElement[] = []
    private mdRendersElements: string[] = []

    constructor(input: HTMLTextAreaElement, output: HTMLElement){
        this.input = input
        this.output = output
    }

    read(){
        const text = this.input.value
        const dataAr = text.split(/^$/gm).filter(el => el)
        this.mdElements = dataAr.map(s => MDElementFactory.createElement(s))
    }
    compile(){
        this.mdRendersElements = this.mdElements.map(el => el.render())
    }
    render(){
        const strHtml = this.mdRendersElements.join()
        this.output.innerHTML = strHtml
    }

    init(){
        this.input.addEventListener('change', () => {
            this.read()
            this.compile()
            this.render()
        })
    }
}