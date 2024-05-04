
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./part_2-working_with_context/counter/counter";
import Todos from "./part_1-working_with_reducer/todos/todos";
import CounterWithZustand from "./part_3-working_with_zustand/counter";

// Lazy load route components

const routes = () => {
    return (
        <Suspense >
            <Routes>
                <Route path="/context" element={<Counter />} />
                <Route path="/reducer" element={<Todos />} />
                <Route path="/zustand" element={<CounterWithZustand />} />
            </Routes>
        </Suspense>
    );
};

export default routes;
