import { useFormik } from 'formik';
import * as yup from "yup";

// const [movies, setMovies] = useState([]);
//  const getMovies = () => {
//   fetch(`${API}/movies/${id}`, {
//  })
//     .then((data) => data.json())
//     .then((mvs) => setMovies(mvs));
//   };
// useEffect(() => )
const formValidationSchema = yup.object({
  email: yup
  .string()
  .min(5, "Need a longer email")
  .required("Why not fill this email?..."),
  password: yup
  .string()
  .min(8, "Need a longer password") 
  .max(12, "Too much password")
  .required("Why not fill this password?..."),
});

export function BasicForm() {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } 
  = useFormik({
    initialValues: {
      email: " ",
      password: " ",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values)=> {
      console.log("Form values", values);
    },
  });

return (
  <form onSubmit={handleSubmit}>
    <input
      name="email"
      value = {values.email}
      onChange = {handleChange}
      oneBlur={handleBlur}
      type = "email"
      placeholder="username"
    /> 
    {touched.email && errors.email ? errors.email: null}
    <input
      name="password"
      value = {values.password}
      onChange = {handleChange}
      oneBlur={handleBlur}
      type = "text"
      placeholder="password"
    /> 
    {touched.password && errors.password ? errors.password: null}
    <button type="submit">Submit</button>
  </form>
)
}

// name - required
// poster - min 4, required
// rating - 0 --- 10, required
// summary - min 20 chars, required
// trailer - min 4, required
