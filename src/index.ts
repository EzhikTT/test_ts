import { MDInterpritator } from "./classes/MDIntepritator";

const app = new MDInterpritator(
    document.getElementById('input_md') as HTMLTextAreaElement,
    document.getElementById('output_md') as HTMLElement
)
app.init()