enum UserStatus {
    Active = "Active",
    Inactive = "Inactive",
    Suspended = "Suspended"
}

function createUser(name: string, age: number, status: UserStatus = UserStatus.Active): string {
    return `User ${name} (${age} years old) status is ${status}`;
}

function calculateDiscount(prices: number[], discount: number = 10): number {
    if (prices.length === 0) return 0;
    const total = prices.reduce((x, y) => x + y);
    return total * (1 - discount * 0.01);
}

const user1 = createUser("Mohemed", 22);
const user2 = createUser("Ahmed",20,UserStatus.Inactive);
console.log(user1);
console.log(user2);

console.log(calculateDiscount([600, 700, 800], 40));
console.log(calculateDiscount([100,200,500]));

