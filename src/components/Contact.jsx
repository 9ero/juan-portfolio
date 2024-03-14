'use client'
import React, { useRef } from 'react';
//import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('hello')
    /*emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );*/
  };

  return (
    <div className='sm:border-2 border-white w-max'>
      <h1 className='text-3xl pt-10 pl-10'>Contact</h1>
    <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start gap-1 px-8 sm:px-28 py-12  w-fit self-center'>
      <label className='mt-5'>Full name</label>
      <input required className='text-secondary px-2 py-1' type="text" name="user_name" placeholder='Jhon Doe' />
      <label className='mt-5'>Company</label>
      <input required className='text-secondary px-2 py-1' type="text" name="user_name" placeholder='(optional)' />
      <label className='mt-2'>Email</label>
      <input required className='text-secondary px-2 py-1' type="email" name="user_email" placeholder='email@example.com'/>
      <label className='mt-2'>Message</label>
      <textarea cols={25} rows={6}  className='text-secondary px-2 py-1 resize-none' name="message" placeholder='Type your message here!'/>
      <input required className='py-2 px-5 mt-5 border-2 border-white hover:scale-110 hover:bg-white hover:text-secondary' type="submit" value="Send" />
    </form>
    </div>
  )
}