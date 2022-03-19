import { useFormik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import { Box, Flex } from '@/components/layout/layout'
import Field from '@/components/field/field'
import Button from '@/components/button/button'
import { Text } from '@/components/typography/typography'

interface UserFormProps {
  name: string
  image: string
  onSuccess: () => void
  onFail: () => void
}

const validationSchema = Yup.object({
  name: Yup.string().required(),
  image: Yup.string().url()
})

const UserForm: FC<UserFormProps> = ({ name, image, onSuccess, onFail }) => {
  const formik = useFormik({
    initialValues: {
      name,
      image
    },
    validationSchema,
    onSubmit: async (values: { name: string, image: string }, { setSubmitting }) => {
      try {
        const res = await fetch('/api/user', {
          body: JSON.stringify(values),
          method: 'PUT',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const data = await res.json()

        if (data.error) {
          onFail()
        } else {
          onSuccess()
        }
      } catch {
        onFail()
      } finally {
        setSubmitting(false)
      }
    }
  })

  return (
    <Box>
      <Flex flow="vertical" as="form" onSubmit={formik.handleSubmit} autoComplete="off">
        <Box css={{ marginBottom: '6px' }}>
          <Field
            invalid={!!formik.errors.name}
            name="name"
            id="name"
            defaultValue={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Name"
          />
          {formik.errors.name && <Text invalid>{formik.errors.name}</Text>}
        </Box>

        <Box css={{ marginBottom: '12px' }}>
          <Field
            invalid={!!formik.errors.image}
            name="image"
            id="image"
            defaultValue={formik.values.image}
            onChange={formik.handleChange}
            placeholder="Image url"
          />
          {formik.errors.image && <Text invalid>{formik.errors.image}</Text>}
        </Box>

        <Flex align="between">
          <Button css={{ marginRight: '10px' }} kind="primary" disabled={formik.isSubmitting} type="submit">Save</Button>
          <Button onClick={formik.handleReset}>Reset</Button>
        </Flex>
      </Flex>
    </Box>
  )
}

UserForm.defaultProps = {
  name: '',
  image: ''
}

export default UserForm
