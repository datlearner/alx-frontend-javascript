import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
    return Promise
    .then(() => {
        uploadPhoto()
    }).then(() => {
        createUser()
    }).catch(() => {
        new Error('Signup system offline')
    })
}
