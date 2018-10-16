import { HomeScreen } from "../index";

describe("HomeScreen", () => {

    let component: HomeScreen;

    let props: any;

    beforeEach(() => {
        component = new HomeScreen(props);
    })

    it("toBeDefined", () => {
        expect(component).toBeDefined();
    })
})