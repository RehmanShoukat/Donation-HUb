import { message } from "antd";
import dayjs from 'dayjs'
// import logoLight from "assets/images/logo-white.png"

window.appName = "CoDev"
// window.logoLight = logoLight
window.year = new Date().getFullYear()
// window.api = process.env.REACT_APP_API_END_POINT

window.getRandomId = () => Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)

window.toCapitalizeCase = text => {
    const result = text?.replace(/([A-Z])/g, " $1");
    return result?.charAt(0).toUpperCase() + result?.slice(1);
}
window.dateFormat = (date, format = "DD-MM-YYYY") => dayjs(date).format(format)

window.calculateAge = (dob) => {
    let ageDifMs = Date.now() - new Date(dob).getTime();
    let ageDate = new Date(ageDifMs); // milliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

message.config({ maxCount: 3 })
window.toastify = (msg, type) => {

    switch (type) {
        case "success":
            message.success(msg)
            break;
        case "error":
            message.error(msg)
            break;
        case "warning":
            message.warning(msg)
            break;
        default:
            message.info(msg)
    }
}

window.onlyNumber = e => { if (!/[0-9]|Backspace|ArrowLeft|ArrowRight|Tab/.test(e.key)) { e.preventDefault() } }

window.links = {
    phone: "tel:+923392633875",
    email: "info@gmail.com",
    whatsapp: "https://api.whatsapp.com/send?phone=923392633875",
    location: "https://maps.app.goo.gl/bDW14FgXiMBPp8Bf9",
    facebook: "https://www.instagram.com/CoDevPK",
    instagram: "https://www.instagram.com/CoDevPK",
    linkedin: "https://www.linkedin.com/company/codevpk",
    youtube: "https://www.youtube.com/@UmairAhmad27/",
    github: "https://github.com/codevpk",
}

window.getTagColor = (text) => {
    let color = ""
    switch (text) {
        case "active": case "applied": case "open": case "passed": case "received": color = "success"; break;
        case "closed": case "fail": case "inactive": color = "error"; break;
        case "pending": color = "warning"; break;
        default: color = "default";
    }
    return color
}

window.findObject = (array, id) => {
    let obj = array.find(obj => obj.id === id)
    return obj;
}

window.FormatCNIC = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    // Apply the CNIC format
    return digitsOnly.length >= 5
        ? `${digitsOnly.slice(0, 5)}-${digitsOnly.slice(5, 12)}-${digitsOnly.length > 12 ? digitsOnly.slice(12, 13) : ""
        }`
        : digitsOnly;
};

window.FormatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    // Apply the phone number format
    return digitsOnly.length >= 12
        ? `+${digitsOnly.slice(0, 2)} ${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 12)}`
        : digitsOnly;
};

window.FormatPhoneNormal = (value) => {
    // Remove all non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    // Apply the phone number format
    return digitsOnly.length >= 12
        ? `${digitsOnly.slice(0, 2) === '92' ? '0' : ''}${digitsOnly.slice(2, 5)} ${digitsOnly.slice(5, 12)}`
        : digitsOnly;
};
