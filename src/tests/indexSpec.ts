import remSeven from "../index";

it("should return 1 when 8 is passed",()=>{
    expect(remSeven(8)).toEqual(1);
})
it("should return 0 when 7 is passed",()=>{
    expect(remSeven(7)).toEqual(0);
})
