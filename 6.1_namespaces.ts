/// <reference path="6.2_namespaces_types.ts" />

namespace Form {
    class MyForm {
        private type: FormType = 'inline'
        constructor(public name: string) { }
        getInfo(): FormInfo { return { type: this.type } }
    }
    export const myForm = new MyForm('Alexander')
}

console.log(Form.myForm)

