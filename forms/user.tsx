import { useFormik } from 'formik'
import { FC } from 'react'
import * as Yup from 'yup'
import { Box, Button, Field, Text, useThemeUI } from 'theme-ui'

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
  const { theme: { colors } } = useThemeUI()
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
      }

      setSubmitting(false)
    }
  })

  return (
    <Box>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <Field
          sx={{
            marginBottom: 3,
            borderColor: formik.errors.name ? 'red' : colors.gray
          }}
          label="Name"
          name="name"
          id="name"
          defaultValue={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && <Text sx={{ marginTop: -3, marginBottom: 3 }} variant="error">{formik.errors.name}</Text>}

        <Field
          sx={{
            marginBottom: 3,
            borderColor: formik.errors.image ? 'red' : colors.gray
          }}
          label="Photo URL"
          name="image"
          id="image"
          defaultValue={formik.values.image}
          onChange={formik.handleChange}
        />
        {formik.errors.image && <Text sx={{ marginTop: -3, marginBottom: 3 }} variant="error">{formik.errors.image}</Text>}

        <Button disabled={formik.isSubmitting} variant="primary" type="submit">Save</Button>
        <Button variant="default" type="button" onClick={formik.handleReset}>Reset</Button>
      </form>
    </Box>
  )
}

UserForm.defaultProps = {
  name: '',
  image: ''
}

export default UserForm
