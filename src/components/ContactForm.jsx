import React from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        e.target.submit();
    };

    return (
        <form
            // 👇 AQUÍ ESTÁ TU URL REAL DE FORMSPREE
            action="https://formspree.io/f/mkojzjna"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto space-y-8"
        >

            {/* CAMPO NOMBRE */}
            <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Nombre</label>
                <input
                    id="name"
                    {...register("name", { required: "El nombre es obligatorio" })}
                    className={`bg-transparent border-b-2 py-3 focus:outline-none transition-colors font-serif text-xl ${errors.name ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-cine-gold dark:border-gray-700 dark:text-white'}`}
                    placeholder="Tu nombre aquí"
                />
                {errors.name && <span className="text-red-500 text-xs mt-2 font-bold">{errors.name.message}</span>}
            </div>

            {/* CAMPO EMAIL */}
            <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                    id="email"
                    type="email"
                    {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Dirección de email no válida"
                        }
                    })}
                    className={`bg-transparent border-b-2 py-3 focus:outline-none transition-colors font-serif text-xl ${errors.email ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-cine-gold dark:border-gray-700 dark:text-white'}`}
                    placeholder="tu@email.com"
                />
                {errors.email && <span className="text-red-500 text-xs mt-2 font-bold">{errors.email.message}</span>}
            </div>

            {/* CAMPO MENSAJE */}
            <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Mensaje</label>
                <textarea
                    id="message"
                    rows="4"
                    {...register("message", { required: "No puedes enviar un mensaje vacío" })}
                    className={`bg-transparent border-b-2 py-3 focus:outline-none transition-colors font-serif text-xl resize-none ${errors.message ? 'border-red-500 placeholder-red-300' : 'border-gray-300 focus:border-cine-gold dark:border-gray-700 dark:text-white'}`}
                    placeholder="¿Qué película me recomiendas?"
                />
                {errors.message && <span className="text-red-500 text-xs mt-2 font-bold">{errors.message.message}</span>}
            </div>

            {/* BOTÓN ENVIAR */}
            <div className="pt-4">
                <button
                    type="submit"
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 font-bold uppercase tracking-widest hover:bg-cine-gold hover:text-white dark:hover:bg-cine-gold dark:hover:text-white transition-colors duration-300 w-full md:w-auto"
                >
                    Enviar Mensaje
                </button>
            </div>

        </form>
    );
}