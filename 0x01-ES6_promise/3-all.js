import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    return Promise.all([uploadPhoto(), createUser()])
        .then((results) => {
            const photo = results[0];
            const user = results[1];
            console.log(`${photo} ${user.firstName} ${user.lastName}`);
        })
        .catch(() => {
            console.log('Signup system offline');
        });
}
