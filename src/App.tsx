import { Alert } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import Layout, { Content } from 'antd/lib/layout/layout';
import HeaderSite from './components/Header/Header';
import React, { useState } from 'react';
import './App.css';
import FooterSite from './components/Footer/Footer';
import FormNewTask from './components/FormNewTask/FormNewTask';
import ListBody from './components/ListBody/ListBody';

function App() {

  const [alertStatus, onChangeAlertStatus] = useState('none') // статус уведомления
  const [alertMessage, onChangeAlertMessage] = useState('') // текст уведомления
  const [form] = useForm() // хук формы

  // Шаблон объекта задачи
  interface Task {
    completed: boolean
    title: string
    date: string
    id: number
  }

  const [stateData, onChangeStateData] = useState<Task[]>([]) // хранилище задач

  // Функция успешного добавления
  const onAppend = (value: any) => {
    console.log('Good. ', value)

    // Пересобираем массив с задачами
    let newTaskList: Task[] = [
      ...stateData,
      { completed: false, title: value.task, date: '', id: stateData.length }
    ]

    onChangeStateData(newTaskList)
    form.resetFields()
    onChangeAlertStatus('success')
    onChangeAlertMessage(`Задача № была успешно добавлена!`)

  }

  // Функция закрытия уведомления
  const onCloseAlert = () => {
    setTimeout(() => {
      onChangeAlertStatus('none')
      onChangeAlertMessage('')
    }, 350)
  }

  // Функция "отметить как выполненное"
  const checkTask = (id: number) => {
    let newTaskList = stateData.map(task => {
      if (task.id === id) {
        task.completed = true
      }
      return task
    })

    onChangeStateData(newTaskList)
  }

  // Функция удаления задания
  const removeTask = (id: number) => {
    let newTaskList = stateData.filter(task => {
      return task.id !== id && task
    })

    onChangeStateData(newTaskList)
  }

  return (
    <Layout className='wrapper'>
      <HeaderSite />
      <Content className='content'>
        {alertStatus === 'success' && <Alert className='alert' message={alertMessage} onClose={onCloseAlert} showIcon closable type={'success'} />}
        <h1>Запиши, чтобы не забыть</h1>
        <FormNewTask form={form} onAppend={onAppend} />
        <ListBody removeTask={removeTask} checkTask={checkTask} data={stateData} />
      </Content>
      <FooterSite />
    </Layout>
  );
}

export default App;
