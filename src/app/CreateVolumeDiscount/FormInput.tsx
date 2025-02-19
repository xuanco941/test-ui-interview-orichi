// FormField.tsx
import React, { CSSProperties, forwardRef } from "react";
import { Controller, Control, RegisterOptions } from "react-hook-form";

interface FormFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  inputMode?: "text" | "search" | "numeric" | "none" | "tel" | "url" | "email" | "decimal" | undefined;
  bgColor?: string;
  errors: any;
  endAdornment?: React.ReactNode;
  formatter?: (value: string) => string;
  onFocus?: any;
  onBlur?: any;
  readOnly?: boolean;
  styleInput?: CSSProperties;
  placeHolder?: string;
  setValue?: (value: any) => void;
  rules?: Omit<RegisterOptions<any, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"> | undefined
}
const FormInput = forwardRef<HTMLInputElement, FormFieldProps>(
  (
    {
      name,
      control,
      label,
      bgColor,
      type = "text",
      inputMode = "text",
      errors,
      formatter,
      endAdornment,
      onFocus = () => { },
      onBlur = () => { },
      readOnly = false,
      styleInput,
      placeHolder = "",
      setValue = () => { },
      rules
    },
    ref
  ) => {

    return (
      <div className="flex flex-col w-full">
        <label htmlFor={name}>{label}</label>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field }) => (
            <div className="w-full relative">
              <input
                inputMode={inputMode}
                placeholder={placeHolder}
                style={{
                  backgroundColor: bgColor ?? "#f3f3f3",
                  border: field.value && errors && errors[name] ? "1px solid red" : "1px solid #ccc",
                  fontSize: "14px",
                  borderRadius: "5px",
                  padding: "0px 10px",
                  height: "35px",
                  color: "#000",
                  fontWeight: "400",
                  width: "100%",
                  ...styleInput,
                }}
                {...field}
                value={field.value ?? ""}
                onChange={(e) => {
                  let inputValue = e.target.value;
                  if (formatter) inputValue = formatter(inputValue);
                  field.onChange(inputValue);
                  setValue(inputValue);
                }}
                type={type}
                onFocus={onFocus}
                onBlur={onBlur}
                readOnly={readOnly}
              />
              <div className="absolute" style={{top: "50%", right: "15%", transform: "translate(-50%,-50%)"}}>{endAdornment}</div>

            </div>

          )}
        />
        {errors && errors[name] && (
          <p style={{ color: "red", fontSize: "13px", marginTop: "0px", fontWeight: "500" }}>
            {errors[name].message}
          </p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
export default FormInput;

