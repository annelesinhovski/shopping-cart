import * as Yup from "yup";

export const defaultSchema = Yup.object().shape({});

const today = new Date();

export const paymentSchema = Yup.object().shape({
  card: Yup.string().required({}).min(19, "Digite um número válido"),
  dateValidate: Yup.date()
    .transform((value, originalValue) => {
      if (originalValue.length < 6) {
        return false;
      }
      const [month, year] = originalValue.split("/");

      return new Date([month, "01", year].join("-"));
    })
    .required("Data obrigatória")
    .typeError("Data invalida"),
  cvv: Yup.string().required({}).min(3, "Digite um CVV válido"),
  fullName: Yup.string().required({}).min(7, "Digite um nome válido"),
});
