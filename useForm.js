import { useState } from "react";


export const useForm = ( inicialForm = {} ) => {

    const [formState, setFormState] = useState(inicialForm)
      
      const onResetForm = () => {
        setFormState(inicialForm);
      }

      const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
          ...formState,
          [ name ]: value,
        });
      }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
