import { handleSubmit } from "../client/js/formHandler"


test("handleSubmit should return true", async () => {
    expect(handleSubmit).toBeDefined();
});

test("handleSubmit should be a function", async () => {
    expect(typeof handleSubmit).toBe("function");
});
