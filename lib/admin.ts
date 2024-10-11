import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_2lgVmg8TL84KtvmEbh0yybx0VBf",
    "user_2kvmir09wvEIAHqpxrBXtI5vh6q",
];

export const isAdmin = () => {
    const { userId } = auth ();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
};        