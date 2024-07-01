"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <div className="flex flex-col w-full mt-8 md:mt-12 overflow-hidden ">
        <div className="w-full flex flex-col items-center justify-center"></div>
        <div className="w-full flex flex-col lg:flex-row items-start justify-center px-5  max-w-7xl mx-auto gap-5 relative ">
          <div className="p-5 md:p-10 w-full  max-w-7xl mt-5 md:mt-10">
            <div className="w-full mx-auto max-w-3xl flex flex-col items-center justify-center gap-5">
              <h2 className="w-full  scroll-m-20 text-lg sm:text-2xl md:text-3xl font-semibold tracking-tight text-center pl-5">
                Oops! Something went wrong.
              </h2>
              <p className="leading-6 sm:leading-7 text-sm sm:text-base">
                We apologize for the inconvenience.
              </p>

              <button
                onClick={() => location.reload()}
                type="button"
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Refresh
              </button>

              <p className="leading-6 sm:leading-7 text-sm sm:text-base">
                If the issue persists.
              </p>
              <p className="leading-6 sm:leading-7 text-sm sm:text-base">
                Kindly get in touch with the web admin for further assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
