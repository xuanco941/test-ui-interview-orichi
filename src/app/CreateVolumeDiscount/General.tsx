import { BlockStack, Card, FormLayout, Text } from "@shopify/polaris";
import { useCreateVolumeDiscount } from "./CreateVolumeDiscountContext";
import FormInput from "./FormInput";

const General = () => {

    const { register, errors, control } = useCreateVolumeDiscount();

    return (
        <Card background={"bg-fill"}>
            <BlockStack gap="300">
                <Text variant="headingLg" as="h5" >
                    General
                </Text>
                <FormLayout>
                    <FormInput
                        label="Campaign"
                        name="Campaign"
                        placeHolder="Volume discount #2"
                        type="text"
                        errors={errors}
                        control={control}
                        rules={{required: "Campaign Name không được trống"}}
                       
                    />
                    <FormInput
                        label="Title"
                        name="Title"
                        placeHolder="Buy more and save"
                        type="text"
                        errors={errors}
                        control={control}
                        rules={{ required: "Title không được trống"}}

                    />
                    <FormInput
                        label="Description"
                        placeHolder="Apply for all products in store"
                        name="Description"
                        type="text"
                        errors={errors}
                        control={control}
                    />
                </FormLayout>
            </BlockStack>
        </Card>
    )
}

export default General;