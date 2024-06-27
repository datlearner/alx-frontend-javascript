import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    return new Promise((resolve, reject) => {
        resolve(() => {
            {uploadPhoto(), createUser()}
        });
        reject(new Error('Signup system offline'));
    })
}
