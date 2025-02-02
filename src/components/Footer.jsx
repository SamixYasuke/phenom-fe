import React from "react";

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-gray-950 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active flex items-center"
            >
              <img
                src="https://backend.phenomnet.com/images/general/f21d3dd5fbc087a4658f696a46d1a43231c83b53-1O1cU.png"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Phenom
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium flex flex-col gap-4">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Top Earners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Phenom™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c-.091-.343-.196-.684-.303-1.028-.114-.35-.239-.693-.375-1.038-.17-.411-.357-.812-.559-1.2-.251-.497-.524-.987-.814-1.473-.163-.261-.344-.512-.541-.762-.184-.242-.387-.472-.607-.692-.2-.202-.413-.398-.633-.59-.147-.137-.306-.258-.468-.384-.324-.212-.658-.42-.993-.626-.514-.309-.948-.618-1.378-.94-.243-.161-.487-.328-.734-.495a4.46 4.46 0 0 0 0 5.857 7.713 7.713 0 0 1 4.745 3.748C8.428 19.527 9.992 19.333 10 19.333c1.374 0 2.471-1.098 2.471-2.473 0-1.312-1.108-2.38-2.471-2.38-1.293 0-2.359 1.031-2.453 2.302-.073-.202-.16-.398-.257-.585-.049-.109-.108-.214-.171-.321.157-.287.32-.58.493-.871.428-.676.891-1.352 1.376-2.019 1.125-1.472 2.224-2.94 3.533-4.324 1.122-1.17 2.264-2.292 3.424-3.477.22-.252.44-.506.662-.759C19.95 9.543 20 9.043 20 8.541a9.87 9.87 0 0 0-10-.208c-1.406.21-2.56.764-3.636 1.59-1.127.781-2.063 1.723-2.9 2.828-2.383-.879-3.544-2.331-4.25-4.038-.209-.521-.338-1.069-.388-1.62-.029-.149-.051-.299-.079-.449-.086-.513-.122-.968-.122-1.444 0-.24.01-.476.027-.711C4.065 5.28 4.955 5 5.774 5 6.85 5 7.905 5.524 8.356 6.214A9.773 9.773 0 0 0 10 1.746a9.747 9.747 0 0 0-1.598 4.385z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">GitHub page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
