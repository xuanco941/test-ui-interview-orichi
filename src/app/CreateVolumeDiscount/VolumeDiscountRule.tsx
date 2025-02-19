import { BlockStack, Card, Divider, Icon, Text } from "@shopify/polaris";
import { DeleteIcon, PlusIcon } from '@shopify/polaris-icons';
import { useCreateVolumeDiscount } from "./CreateVolumeDiscountContext";
import FormInput from "./FormInput";
import type { VolumeDiscountRule } from "./types";

const VolumeDiscountRule = () => {
    const { addNewVolumeDiscountRules, listVolumeDiscountRules } = useCreateVolumeDiscount();
    return (
        <Card background={"bg-fill"}>
            <BlockStack gap="300">
                <Text variant="headingLg" as="h5" >
                    Volume Discount Rule
                </Text>
                {listVolumeDiscountRules.map((item, index) =>
                    <div key={index}>
                        <FormAddVolumeDiscountRule data={item} />
                    </div>

                )}

                <BlockStack gap="500">
                    <Divider borderColor="border" />
                    <button role="button" type="button" onClick={addNewVolumeDiscountRules} style={{ width: "100%", cursor: "pointer", backgroundColor: "#ec4d2e", color: "#fff", height: "35px", borderRadius: "8px", border: "none" }} className="flex items-center justify-center gap-1">
                        <div style={{ fontSize: "28px" }}>
                            <Icon source={PlusIcon} />
                        </div>
                        <span className="text-[16px]"> Add option</span>
                    </button>
                </BlockStack>

            </BlockStack>
        </Card>
    )
}

const FormAddVolumeDiscountRule = ({ data }: { data: VolumeDiscountRule }) => {
    const { register, errors, control, removeVolumeDiscountRules, updateDiscountRule } = useCreateVolumeDiscount();
    const options = [
        { label: 'None', value: 'None' },
        { label: '% discount', value: '% discount' },
        { label: 'Discount / each', value: 'Discount / each' },
    ];
    return (
        <div className="mb-7">
            <div style={{ position: "relative" }}>
                <Divider borderColor="border" />
                <div style={{ backgroundColor: "#ec4d2e", color: "#fff", width: "100px", padding: "6px", borderRadius: "1px 1px 12px 1px" }}>OPTION 1</div>
                <div className="flex justify-end px-[50px]">
                    <div style={{ fontSize: "32px", cursor: "pointer" }} onClick={() => { removeVolumeDiscountRules(data.Id) }}>
                        <Icon source={DeleteIcon} />
                    </div>
                </div>

            </div>
            <div style={{ padding: "10px 50px" }} className="flex flex-col gap-5">
                <div className="flex flex-nowrap gap-10 justify-between items-start">
                    <div className="w-full">
                        <FormInput
                            label={"Title"}
                            name={`title-option-${data.Id}`}
                            placeHolder="Single"
                            type="text"
                            errors={errors}
                            control={control}
                            setValue={(value) => {
                                updateDiscountRule(data.Id, { Title: value });
                            }}
                            rules={{ required: "Title không được trống" }}
                        />
                    </div>
                    <div className="w-full">
                        <FormInput
                            label={"Subtitle"}
                            name={`subtitle-option-${data.Id}`}
                            placeHolder="Standard price"
                            type="text"
                            errors={errors}
                            control={control}
                            setValue={(value) => {
                                updateDiscountRule(data.Id, { Subtitle: value });
                            }}
                        />
                    </div>
                    <div className="w-full">
                        <FormInput
                            label={"Label(optional)"}
                            name={`label-option-${data.Id}`}
                            type="text"
                            errors={errors}
                            control={control}
                            setValue={(value) => {
                                updateDiscountRule(data.Id, { Label: value });
                            }}
                        />
                    </div>
                </div>
                <div className="flex flex-nowrap gap-10 justify-between items-start flex-1">
                    <div className="w-full">
                        <FormInput
                            label={"Quantity"}
                            name={`quantity-option-${data.Id}`}
                            placeHolder=""
                            type="number"
                            errors={errors}
                            control={control}
                            setValue={(value) => {
                                updateDiscountRule(data.Id, { Quantity: value });
                            }}
                            rules={{ required: "Quantity không được trống" }}
                        />
                    </div>

                    <div className="w-full">
                        <div className="flex flex-col w-full">
                            <label htmlFor={`discount-type-${data.Id}`}>Discount type</label>

                            <select value={data.DiscountType} onChange={(e) => {
                                updateDiscountRule(data.Id, { DiscountType: e.target.value == "None" || e.target.value == "% discount" || e.target.value == "Discount / each" ? e.target.value : "None" })
                            }} name={`discount-type-${data.Id}`} style={{
                                backgroundColor: "#f3f3f3",
                                border: "1px solid #ccc",
                                fontSize: "14px",
                                borderRadius: "5px",
                                padding: "0px 10px",
                                height: "35px",
                                color: "#000",
                                fontWeight: "400",
                            }}>
                                {options.map((item, index) =>
                                    <option key={index} value={item.value}>{item.label}</option>
                                )}
                            </select>

                        </div>
                    </div>

                    <div className="w-full">
                        {data.DiscountType != "None" &&
                            <FormInput
                                label={"Amount"}
                                name={`amount-option-${data.Id}`}
                                placeHolder=""
                                type="number"
                                errors={errors}
                                control={control}
                                endAdornment={data.DiscountType == "% discount" ? "%" : "$"}
                                setValue={(value) => {
                                    updateDiscountRule(data.Id, { Amount: value });
                                }}
                                rules={{ required: "Amount không được trống" }}
                            />

                        }
                    </div>



                </div>
            </div>
        </div>
    )
}


export default VolumeDiscountRule;