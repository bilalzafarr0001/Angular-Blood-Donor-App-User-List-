import * as server_component from "./server.component"
// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new server_component.ServerComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
