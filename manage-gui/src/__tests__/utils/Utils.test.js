import {collapseDotKeys, createDiff} from "../../utils/Utils";

test("collapseDotKeys", () => {
    const res = collapseDotKeys({
        "a.b.c": "val",
        "d.e.f": ["some"],
        "g": {a: 1}
    });
    expect(res.a.b.c).toStrictEqual("val");
    expect(res.d.e.f).toStrictEqual(["some"]);
    expect(res.g).toStrictEqual({a: 1});
});

test("createDiff", () => {
    const res = createDiff(
        {a: "b", c: {d: "val", ign: "x"}, ign: [1, 2, 3]},
        {a: "x", c: {d: "changed"}, extra: [1]}
    );
    expect(res).toStrictEqual({a: "b", c: {d: "val"}});
});
