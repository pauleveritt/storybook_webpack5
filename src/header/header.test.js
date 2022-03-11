const {screen} = require("@testing-library/dom");
const heading = require("../header");


test("Renders a heading with argument", () => {
    document.body.innerHTML = heading("donkey");
    expect(screen.getByText("Hello donkey!!")).toBeVisible();
});