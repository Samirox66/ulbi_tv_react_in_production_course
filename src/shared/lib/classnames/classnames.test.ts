import { classNames } from "./classnames";

describe("classnames", () => {
    test("test", () => {
        expect(classNames("main", {}, [])).toBe("main ");
    });
});
