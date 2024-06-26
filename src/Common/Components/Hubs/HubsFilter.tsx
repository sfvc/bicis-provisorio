import React from "react";
import { X } from "lucide-react";

const HubsFilter = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Buscador de Hubs</h6>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 xl:grid-cols-3">
                            <div className="mb-4">
                                <label htmlFor="firstNameInput2" className="inline-block mb-2 text-base font-medium">Nombre y Direccion <span className="text-red-500">*</span></label>
                                <input type="text" id="firstNameInput2" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Buscar por nombre, apellido, email o DNI" defaultValue="Sophia" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="stateInput" className="inline-block mb-2 text-base font-medium">Prioridad <span className="text-red-500">*</span></label>
                                <select defaultValue="Choose..." className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="stateInput" required>
                                    <option disabled>Choose...</option>
                                    <option>Name</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="stateInput" className="inline-block mb-2 text-base font-medium">Estado <span className="text-red-500">*</span></label>
                                <select defaultValue="Choose..." className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="stateInput" required>
                                    <option disabled>Choose...</option>
                                    <option>Name</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end gap-2">
                            <button type="button" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"><X className="inline-block size-4" /> <span className="align-middle">Limpiar</span></button>
                            <button type="submit" className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100">Buscar</button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HubsFilter;