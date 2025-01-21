import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(
                {
                    from_name: form.name,
                    to_name: 'Kapil Hemane',
                    from_email: form.email,
                    to_email: 'ranchoks812@gmail.com',
                    message: form.message
                });
          await emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Kapil Hemane',
                from_email: form.email,
                to_email: 'ranchoks812@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
          );
          setLoading(false);
          alert('Your message has been sent!');
          setForm({
            name: '',
            email: '',
            message: ''
          });
        } catch (error) {
          setLoading(false);
          console.log(error);
          alert('Something went wrong');
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Lets talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="ex., johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
