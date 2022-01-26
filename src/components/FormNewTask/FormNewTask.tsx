import { Space, Form, Input, Button } from 'antd'
import React from 'react'
import style from './FormNewTask.module.css'

const FormNewTask = (props: any) => {
    const rulesToForm = {
        required: true,
        message: 'Пожалуйста, введите задачу!'
    }

    return (
        <Form onChange={props.onChange} onFinish={props.onAppend} form={props.form}>
            <Space>
                <Form.Item className={style.wrapper} name='task' rules={[rulesToForm]}>
                    <Input placeholder='Введите задачу...' />
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit' type='primary'>Добавить</Button>
                </Form.Item>
            </Space>
        </Form>
    )
}

export default FormNewTask