
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Counter from "./part_2-working_with_context/counter/counter";
import Todos from "./part_1-working_with_reducer/todos/todos";

// Lazy load route components

const routes = () => {
    return (
        <Suspense >
            <Routes>
                <Route path="/context-counter" element={<Counter />} />
                <Route path="/reducer-todos" element={<Todos />} />
            </Routes>
        </Suspense>
    );
};

export default routes;
