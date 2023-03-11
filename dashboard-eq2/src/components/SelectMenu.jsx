import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"

const states = ["disponible", "en trabajo", "finalizado", "en espera"]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function SelectMenu({ state, id }) {
  const handleSubmit = async (val) => {
    // Get data from select and id from props.
    const data = {
      estado: val,
      id,
    }

    // Send a POST request to the server with the data.
    const response = await fetch("api/db/updateMissingProductionState", {
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
    // If server returns the name submitted, that means it works.
    const result = await response.json()

    if (result) {
      return
    }
  }

  return (
    <Listbox defaultValue={state} name="state" onChange={handleSubmit}>
      {({ open, value }) => (
        <>
          <div className="relative my-2">
            <Listbox.Button
              className={`relative whitespace-nowrap w-full cursor-default rounded-md py-1.5 pl-2 pr-7 text-left text-gray-900 focus:outline-none sm:text-sm sm:leading-6
                            ${
                              value === "disponible"
                                ? " bg-green-100  text-green-800 "
                                : value === "en trabajo"
                                ? " bg-yellow-100 text-yellow-800 "
                                : value === "finalizado"
                                ? " bg-red-100 text-red-800 "
                                : " bg-gray-200 text-gray-800 "
                            }
                          `}
            >
              <span className="flex items-center">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-center">
                  {value}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className={`"h-5 w-5 opacity-90" ${
                    value === "disponible"
                      ? " text-green-800"
                      : value === "en trabajo"
                      ? "text-yellow-800"
                      : value === "finalizado"
                      ? "text-red-800"
                      : "text-gray-800"
                  }`}
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {states.map((state, stateIdx) => (
                  <Listbox.Option
                    key={stateIdx}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pr-2"
                      )
                    }
                    value={state}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {state}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-2"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
