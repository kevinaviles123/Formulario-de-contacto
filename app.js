const frmEmail = document.getElementById('frm-email')
frmEmail.addEventListener('submit', sendEmail)

const serviceId = 'service_6s7i5zs'
const templateId = 'template_1hpf62v'
const apikey = 'jDpV9utIr2y8Yqo4m'

function sendEmail(event) {
    event.preventDefault();
    emailjs.init(serviceId);

    emailjs
    .sendForm(serviceId, templateId, frmEmail, apikey)
    .then((result) => Swal.fire("Su mensaje se ha enviado con exito.")  )
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            Text: 'No ha sido posible el envio del mensaje',
        });
    });
}