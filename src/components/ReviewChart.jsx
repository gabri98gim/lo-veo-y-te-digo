import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const colors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];

export default function ReviewChart({ data }) {

    if (!data || data.length === 0) {
        return <p className="text-center text-gray-500">Aún no hay datos suficientes.</p>;
    }

    return (
        <div className="w-full h-[400px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white font-serif">
                Distribución de Notas (Real)
            </h3>

            <ResponsiveContainer width="100%" height="100%">
                {/* AQUI ESTÁ EL CAMBIO: Añadido margin bottom: 40 */}
                <BarChart
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 0,
                        bottom: 40,
                    }}
                >
                    <XAxis
                        dataKey="name"
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#888888"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        allowDecimals={false}
                    />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{
                            backgroundColor: '#1a1a1a',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#fff'
                        }}
                    />
                    <Bar dataKey="cantidad" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}