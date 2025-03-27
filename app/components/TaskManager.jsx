'use client';

import { useState, useEffect } from 'react';

export default function TaskManager() {
  // 从本地存储加载任务
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // 组件加载时从localStorage读取任务
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // 当任务变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // 其余代码保持不变...
  const addTask = () => {
    if (newTask.trim() === '') return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // 返回JSX部分保持不变...
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* 代码与之前相同... */}
    </div>
  );
}
