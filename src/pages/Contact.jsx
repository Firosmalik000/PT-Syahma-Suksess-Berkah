import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const classInput = 'outline outline-blue-300 h-[35px] md:w-[500px] w-[300px] rounded-[20px] border-[1px] p-3 mx-auto';
  const classLabel = 'text-xl font-semibold text-center ';

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!userName || !userEmail || !message) {
      toast.error('Silakan lengkapi semua kolom.', { position: 'top-center' });
      return;
    }

    if (!isValidEmail(userEmail)) {
      toast.error('Alamat email tidak valid.', { position: 'top-center' });
      return;
    }

    try {
      const isEmailValid = await verifyEmailOnServer(userEmail);

      if (!isEmailValid) {
        toast.error('Email tidak terdaftar. Silakan periksa alamat email Anda.', { position: 'top-center' });
        return;
      }

      const result = await emailjs.sendForm('service_1ijpuvl', 'template_povktai', form.current, 'B3wPfug-BWkwar_Wh');
      console.log(result.text);
      toast.success('Pesan terkirim. Terima kasih!', { position: 'top-center' });

      // Setelah pesan terkirim, kosongkan formulir
      form.current.user_name.value = '';
      form.current.user_email.value = '';
      form.current.message.value = '';
    } catch (error) {
      console.error(error);
      toast.error('Error mengirim pesan. Silakan coba lagi nanti.', { position: 'top-center' });
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const verifyEmailOnServer = async (email) => {
    // Gantilah ini dengan implementasi sebenarnya untuk memeriksa email pada sisi server
    // Ini hanya contoh dan tidak melakukan apa-apa, Anda harus menghubungkan ke server Anda di sini
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true); // Menyatakan bahwa email valid (contoh sederhana)
      }, 1000);
    });
  };
  return (
    <section className="py-[100px]" id="contact">
      <div>
        <h1 className="text-center mb-[50px] text-4xl font-semibold">Contact Us</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 justify-center ">
        <label className={classLabel}>Name</label>
        <input type="text" placeholder="Name" name="user_name" className={classInput} />
        <label className={classLabel}>Email</label>
        <input type="text" placeholder="Email" className={classInput} name="user_email" />
        <label className={classLabel}>Message</label>
        <textarea placeholder="Message" className="outline outline-blue-300 h-[125px] md:w-[500px] w-[300px] rounded-[20px] border-[1px] p-3 mx-auto" name="message" />
        <input type="submit" value="Send" className="w-[300px] md:w-[500px] mx-auto bg-blue-500 text-white cursor-pointer py-2 px-3 rounded-[20px] text-xl" />
        <ToastContainer />
      </form>
    </section>
  );
};

export default Contact;
