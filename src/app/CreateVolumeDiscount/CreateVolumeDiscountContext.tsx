import { createContext, useContext, useState, ReactNode } from "react";
import { VolumeDiscountRule } from "./types";
import { useForm } from "react-hook-form";

// Context
interface DataContext {
  listVolumeDiscountRules: VolumeDiscountRule[];
  addNewVolumeDiscountRules: () => void;
  removeVolumeDiscountRules: (Id: number) => void;
  updateDiscountRule: (id: number, updatedFields: Partial<VolumeDiscountRule>) => void;
  register: any;
  errors: any;
  watch: any;
  control: any;
}
const CreateVolumeDiscountContext = createContext<DataContext>({
  listVolumeDiscountRules: [],
  addNewVolumeDiscountRules: () => { },
  removeVolumeDiscountRules: () => { },
  updateDiscountRule: () => { },
  register: undefined,
  errors: undefined,
  watch: undefined,
  control: undefined,
});

export const CreateVolumeDiscountProvider = ({ children }: { children: ReactNode }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const [listVolumeDiscountRules, setListVolumeDiscountRules] = useState<VolumeDiscountRule[]>([{
    Id: 1,
    DiscountType: "None",
    Quantity: 1,
    Subtitle: "",
    Title: "",
  }]);
  const onSubmit = async (data: any) => {
    const bodyData = {
      Campaign: data["Campaign"],
      Title: data["Title"],
      Description: data["Description"],
      listVolumeDiscountRules: listVolumeDiscountRules
    }
    console.log("Dữ liệu gửi đi:", bodyData);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        alert("Create successful");
        reset();
        setListVolumeDiscountRules([{
          Id: 1,
          DiscountType: "None",
          Quantity: 1,
          Subtitle: "",
          Title: "",
        }]);
      });
  };

  const addNewVolumeDiscountRules = () => {
    setListVolumeDiscountRules((prev) => {
      const newObj: VolumeDiscountRule = {
        Id: listVolumeDiscountRules.length < 1 ? 1 : prev[prev.length - 1].Id + 1,
        DiscountType: "None",
        Quantity: listVolumeDiscountRules.length < 1 ? 1 : prev[prev.length - 1].Quantity + 1,
        Subtitle: "",
        Title: ""
      };
      return [...prev, newObj];
    })
  }
  const updateDiscountRule = (id: number, updatedFields: Partial<VolumeDiscountRule>) => {
    setListVolumeDiscountRules(prevRules =>
      prevRules.map(rule =>
        rule.Id === id ? { ...rule, ...updatedFields } : rule
      )
    );
  };
  const removeVolumeDiscountRules = (Id: number) => {
    setListVolumeDiscountRules((prev) => {
      return prev.filter((item) => item.Id != Id);
    })
  }

  return (
    <CreateVolumeDiscountContext.Provider value={{
      listVolumeDiscountRules, addNewVolumeDiscountRules,
      removeVolumeDiscountRules, register, errors, watch, control, updateDiscountRule
    }}>
      <form name="form-create-volume-discount" onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </CreateVolumeDiscountContext.Provider>
  );
};

// hook để sử dụng
export const useCreateVolumeDiscount = () => useContext(CreateVolumeDiscountContext);
