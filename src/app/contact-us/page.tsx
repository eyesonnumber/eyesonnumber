const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <p className="text-blue-500">
        Email us at:{" "}
        <a href="mailto:help.eyesonnumber@gmail.com" className="underline">
          help.eyesonnumber@gmail.com
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
