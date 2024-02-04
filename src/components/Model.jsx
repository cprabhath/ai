import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { sendMail } from "../utils/SendMail";


function ModalDialog({ isOpen, setIsOpen }) {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = () => {
    sendMail(email, text);
    setEmail("");
    setText("");
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 overflow-hidden">
                Oops! Did we slip up? Let us know how we can make things right!
                </Dialog.Title>
                <div className="mt-2">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-2 p-2 border-2 border-primary"
                    placeholder="Enter your email address"
                  />
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full mb-2 p-2 border-2 border-primary"
                    placeholder="What went wrong? How can we help?"
                    style={{ resize: "none", height: "20vh" }}
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="me-2 inline-flex justify-center rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default ModalDialog;
