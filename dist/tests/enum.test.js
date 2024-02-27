import { CustomerType } from "../src/enum";
describe('Enum', () => {
    it('should support enum in typescript', () => {
        const customer = {
            id: "12",
            name: "irfan",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
