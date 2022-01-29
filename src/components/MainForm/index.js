import React, { useState, useContext } from 'react';

import { AppContext } from '../../context';
import { Form, Input, Button, InputNumber } from 'antd';

import { LIghtBox } from '../LIgthBox';
import './styles.scss'

export const MainForm = () => {
    const { selected } = useContext(AppContext);
    const [form] = Form.useForm();

    const [showModal, setShowModal] = useState(false);

    const onSubmit = (values) => {
        console.log("Datos del formulario: ", values);
        setShowModal(true);
        form.resetFields();
        setTimeout(() => {
            setShowModal(false);
        }, 5000);

    }

    if(!selected) return <p>Loading...</p>

    return <div className='mainform'>
        <LIghtBox show={showModal} />
        <p>Hola, bienvenido sabemos que quieres viajar en un <strong>{selected.name}</strong>,<br/>
        por favor diligencia el siguiente formulario:</p>

        <Form
            name="mainForm"
            form={form}
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            autoComplete="off"
        >
            <Form.Item
                label="Nombre Completo"
                name="fullName"
                rules={[{ required: true, message: 'Por afvor ingrese su Nombre Completo!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ type: 'email', required: true, message: 'Por favor ingrese su email!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="phone"
                label="Celular"
                rules={[{ pattern: '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$', required: true, message: 'Por favor ingrese su numero de celular!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                name="age"
                label="Edad"
                rules={[{ required: true, message: 'Por favor ingrese su edad!' }]}
            >
                <InputNumber min={18} max={100} addonAfter="años" />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    </div>;
};
