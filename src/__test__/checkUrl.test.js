import { checkURL } from "../client/js/checkUrl"


test("checkURL should return true", async () => {
    expect(checkURL).toBeDefined();
});

test("checkURL should be a function", async () => {
    expect(typeof checkURL).toBe("function");
});
