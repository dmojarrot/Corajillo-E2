import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { useQueryClient } from "@tanstack/react-query"

export function AddOrderModal({ openModal, setOpenModal, formAction }) {
  const queryClient = useQueryClient()
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Cast the event target to an html form
    const form = event.target
    console.log(form)
    // Get data from the form.
    const data = {
      gama: form.gama.value,
      piezas: form.piezas.value,
      fechaPedido: form.fechaPedido.value,
      fechaEntrega: form.fechaEntrega.value,
    }

    console.log(data)

    // Send the form data to our API and get a response.
    const response = await fetch(formAction, {
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // The method is POST because we are sending data.
      method: "POST",
    })

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    if (result) {
      // If the form works, close the modal.
      setOpenModal(false)
      // Invalidate the orders query to trigger a re-fetch.
      void queryClient.invalidateQueries({ queryKey: ["orders"] })
      return
    }
  }
  return (
    <>
      <Transition.Root show={openModal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                  <div className="mt-3 text-left sm:mt-5">
                    <button
                      type="button"
                      onClick={() => setOpenModal(false)}
                      className="absolute top-2.5 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-400"
                      data-modal-toggle="deleteModal"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>

                    <form
                      onSubmit={handleSubmit}
                      className="flex items-center justify-center space-x-4"
                    >
                      <div className="flex flex-col gap-2 w-full">
                        <h1 className="text-2xl font-bold text-gray-900">
                          Agregar pedido
                        </h1>
                        <label
                          htmlFor="gama"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Gama
                        </label>
                        <input
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          type="text"
                          name="gama"
                          required
                        />
                        <label
                          htmlFor="piezas"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Piezas
                        </label>
                        <input
                          type="number"
                          name="piezas"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />

                        <label
                          htmlFor="fechaPedido"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fecha de pedido
                        </label>
                        <input
                          type="date"
                          name="fechaPedido"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                        <label
                          htmlFor="fechaEntrega"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Fecha de entrega
                        </label>
                        <input
                          type="date"
                          name="fechaEntrega"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          required
                        />
                        <button
                          className="mt-5 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                          type="submit"
                        >
                          Agregar
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
