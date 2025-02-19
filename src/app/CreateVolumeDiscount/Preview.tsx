
import { BlockStack, Card, Text } from "@shopify/polaris";
import { useCreateVolumeDiscount } from "./CreateVolumeDiscountContext";

const Preview = () => {
    const { listVolumeDiscountRules } = useCreateVolumeDiscount();
    return (
        <Card background={"bg-fill"}>
            <BlockStack gap="300">
                <Text variant="headingLg" as="h5" >
                    Preview
                </Text>
                <div className="text-center">
                    <Text variant="headingLg" as="h5" >
                        Buy more and save
                    </Text>
                </div>

                <Text variant="headingMd" as="h6" >
                    Apply for all products in store
                </Text>
                <div className="overflow-x-auto p-4 overflow-y-auto max-h-[75dvh]">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr >
                                <th className="p-2 text-start text-[16px] text-stone-600 font-medium">Title</th>
                                <th className="p-2 text-[16px] text-stone-600 font-medium text-center">Discount Type</th>
                                <th className="p-2 text-[16px] text-stone-600 font-medium text-center">Quantity</th>
                                <th className="p-2 text-[16px] text-stone-600 font-medium text-end">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listVolumeDiscountRules.map((item, index) =>
                                <tr key={index} style={{ borderTop: "1px solid #ccc" }}>
                                    <td className="p-2 text-stone-600">{item.Title}</td>
                                    <td className="p-2 text-stone-600 text-center">{item.DiscountType}</td>
                                    <td className="p-2 text-stone-600 text-center">{item.Quantity}</td>
                                    <td className="p-2 text-stone-600 text-end">{item.Amount ?? ""}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>

            </BlockStack>



        </Card>
    )
}

export default Preview;