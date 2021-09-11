import { notify } from "@kyvg/vue3-notification";
const notification = {
    login,
    editProfile
}

// login notification
function login(text) {

    // prompt success notify if login was successfull
    notify({
        title: "Inicio de sesion",
        text,
        type: "info"
    });

}
function editProfile(text) {
    notify({
        title: "Actualizacion de usuario",
        text,
        type: "info"
    })
}

export default notification