import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  count: 0,
};

//? type'ların CONSTANT olarak tanimlanmasi
export const INC = "INC";
export const DEC = "DEC";
export const CLR = "CLR";

//? Action creater fonksyi onlarının tanimlanmsi

export const increment = () => ({ type: INC });

export const decrement = () => {
  return { type: DEC };
};
export const clear = () => {
  return { type: CLR };
};

export const counterreducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return { count: state.count + 1 };

    case "DEC":
      return { count: state.count - 1 };

    case "CLR":
      return { count: 0 };

    default:
      return state;
  }
};
