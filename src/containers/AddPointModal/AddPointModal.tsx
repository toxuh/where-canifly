import React from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import { Button, Form, Input, Modal, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import type { Position } from '../../common/app/types';
import type { AddPointType } from '../../api';

import useAddPoint from './useAddPoint';

type Props = {
  coords: Position;
  modal: boolean;
  setModal: (state: boolean) => void;
  onSubmit: (point: AddPointType) => void;
};

const { TextArea } = Input;
const { Option } = Select;

const AddPointModal: React.FC<Props> = ({
  coords,
  modal,
  setModal,
  onSubmit,
}) => {
  const { categories } = useAddPoint();

  const [form] = Form.useForm();

  const initialValues = {
    title: '',
    description: '',
    latitude: coords.lat as number,
    longitude: coords.lon as number,
    typeId: '',
  };

  const { setValues, values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (data) => {
      onSubmit(data);
      setModal(false);
    },
  });

  /* useEffect(() => {
    setValues({
      ...values,
      latitude: coords.lat,
      longitude: coords.lon,
    });
  }, [coords, setValues]); */

  return (
    <Modal
      title="Add new point"
      visible={modal}
      onCancel={() => setModal(false)}
      onOk={form.submit}
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          label="Title"
          name="titleField"
          rules={[{ required: true, message: 'Please enter point title' }]}
        >
          <Input name="title" value={values.title} onChange={handleChange} />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryField"
          rules={[{ required: true, message: 'Please select category' }]}
        >
          <Select
            className="SelectBox"
            placeholder="Select category"
            optionFilterProp="children"
            onChange={(value) =>
              setValues({
                ...values,
                typeId: value as string,
              })
            }
          >
            {categories.map((category) => (
              <Option key={category.id} value={category.id}>
                {category.title}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name="descriptionField"
          rules={[
            { required: true, message: 'Please enter point description' },
          ]}
        >
          <TextArea
            name="description"
            value={values.description}
            autoSize={{ minRows: 2, maxRows: 6 }}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Point image" name="image">
          <Upload>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPointModal;
