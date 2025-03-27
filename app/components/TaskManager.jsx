'use client';

import { useState } from 'react';

export default function TaskManager() {
  // 状态管理：任务列表和新任务输入
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // 添加任务的函数
  const addTask = () => {
    // 验证：不添加空任务
    if (newTask.trim() === '') return;
    
    // 创建新任务对象
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    
    // 更新任务列表
    setTasks([...tasks, task]);
    
    // 清空输入框
    setNewTask('');
  };

  // 处理按回车键添加任务
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  // 切换任务完成状态
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // 删除任务
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">任务管理器</h1>
      
      {/* 任务输入区域 */}
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow px-4 py-2 border rounded-l focus:outline-none"
          placeholder="添加新任务..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          onClick={addTask}
        >
          添加
        </button>
      </div>
      
      {/* 任务列表 */}
      <div>
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">暂无任务，开始添加吧！</p>
        ) : (
          <ul>
            {tasks.map(task => (
              <li 
                key={task.id} 
                className="flex items-center justify-between p-3 border-b"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="mr-2"
                  />
                  <span className={task.completed ? 'line-through text-gray-400' : ''}>
                    {task.text}
                  </span>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  删除
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
