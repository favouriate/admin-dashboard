"use client";

import { useState, useCallback } from "react";
import type { Todo } from "@/types/dashboard";
import { MOCK_TODOS } from "@/features/dashboard/data/mockTodos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }, []);

  return { todos, toggleTodo };
}
