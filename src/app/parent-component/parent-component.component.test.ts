import * as parent_component_component from "./parent-component.component"
// @ponicode
describe("countChangedHandler", () => {
    let inst: any

    beforeEach(() => {
        inst = new parent_component_component.ParentComponentComponent()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.countChangedHandler(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
