import { MDElement } from "./MDElement";

export class MDHrElement extends MDElement {
    protected tag: string = 'hr';

    constructor() {
        super()
    }

    parse(s: string): boolean {
        return true
    }

    render(): string {
        return '<hr/>'
    }

    static is(s: string) {
        return /\-{3}/.test(s)
    }
}