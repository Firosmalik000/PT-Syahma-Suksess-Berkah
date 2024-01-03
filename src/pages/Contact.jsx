const Contact = () => {
  const classInput = 'outline outline-blue-300 h-[35px] md:w-[500px] w-[300px] rounded-[20px] border-[1px] p-3 mx-auto';
  const classLabel = 'text-xl font-semibold text-center ';
  return (
    <section className="py-[100px]">
      <div>
        <h1 className="text-center mb-[50px] text-4xl font-semibold">Contact Us</h1>
      </div>
      <form className="flex flex-col gap-5 justify-center ">
        <label className={classLabel}>Name</label>
        <input type="text" placeholder="Name" className={classInput} />
        <label className={classLabel}>Email</label>
        <input type="text" placeholder="Email" className={classInput} />
        <label className={classLabel}>Message</label>
        <textarea placeholder="Message" className="outline outline-blue-300 h-[125px] md:w-[500px] w-[300px] rounded-[20px] border-[1px] p-3 mx-auto" />
      </form>
    </section>
  );
};

export default Contact;
