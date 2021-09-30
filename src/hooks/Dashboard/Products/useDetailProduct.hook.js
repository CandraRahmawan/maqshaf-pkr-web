import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { get, isEmpty } from 'lodash';
import { IS_OK } from 'constants/httpStatus.constant';
import { useMutation, useQuery } from 'react-query';
import { fetchApiClient } from 'helpers/fetchApi.helper';
import * as yup from 'yup';

const useDetailProductHook = (t, history, id) => {
  const validationSchema = yup.object({
    name: yup.string().required(t('dashboard_product:validation.nameRequired')),
    // image: yup.string().required(t('dashboard_product:validation.imageRequired')),
    // description: yup.string().required(t('dashboard_product:validation.descriptionRequired')),
    price: yup.string().required(t('dashboard_product:validation.priceRequired')),
    category: yup.string().required(t('dashboard_product:validation.categoryRequired')),
  });


  const [imageMessage, setImageMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const { data: dataProduct } = useQuery(['getDetailAdministrator', id], () => fetchApiClient(`/mastergood/${id}`, 'GET'),
    {
      enabled: id !== 'add',
      refetchOnMount: "always"
    }
  );

  const { data, error, isLoading, mutate } = useMutation('administratorMutation', (requestData) =>
    fetchApiClient(`/mastergood/add`, 'POST', requestData, true)
  )

  const { data: dataUpdate, error: errorUpdate, isLoading: isLoadingUpdate, mutate: mutateUpdate } = useMutation('administratorMutationUpdate', (requestData) =>
    fetchApiClient(`/mastergood/update/${id}`, 'POST', requestData, true)
  )

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      image: '',
      price: '',
      category: 'makanan',
      isActive: '1',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (selectedFile) {
        setImageMessage('')
        const formData = new FormData();
        const { name, description, price, category, isActive } = values
        formData.append('name', name)
        formData.append('description', description)
        formData.append('price', Math.round(price.replaceAll(/,/g, '')))
        formData.append('category', category)
        formData.append('isActive', isActive)
        if (selectedFile.name) {
          formData.append('image_file', selectedFile, selectedFile.name)
        }

        if (id !== 'add') {
          mutateUpdate(formData)
        } else {
          mutate(formData);
        }
      } else {
        setImageMessage(t('dashboard_product:validation.imageRequired'))
      }
    },
  });

  const onChangeFile = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageMessage('')
  };

  useEffect(() => {
    if (!isEmpty(dataProduct?.data)) {
      const product = get(dataProduct, 'data.[0]', {})
      const { name, description, price, category, isActive, image } = product;
      formik.setFieldValue('name', name)
      formik.setFieldValue('description', description)
      // formik.setFieldValue('image', image)
      formik.setFieldValue('price', String(price))
      formik.setFieldValue('category', category)
      formik.setFieldValue('isActive', String(isActive))
      setSelectedFile(image)
    }
  }, [dataProduct?.data])

  useEffect(() => {
    if (IS_OK(data) || IS_OK(dataUpdate)) {
      history.replace('/dashboard/produk?success=true');
    }

    if (error || errorUpdate) {
      setShowAlert(true);
      window.scrollTo(0, 0)
    }
  }, [data, dataUpdate, error, errorUpdate]);

  const formatMoney = (val) => {
    let newValue = formik.values.price.toString();
    newValue = newValue.replace(/,/g, '')
    newValue = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return newValue
  }

  return {
    formatMoney,
    onChangeFile,
    imageMessage,
    selectedFile,
    error: error || errorUpdate,
    isLoading: isLoading || isLoadingUpdate,
    formik,
    showAlert,
  };
};

export default useDetailProductHook;
