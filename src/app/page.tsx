"use client"

import { BlockStack, Page, Layout, Button } from "@shopify/polaris";
import { CreateVolumeDiscountProvider, useCreateVolumeDiscount } from "./CreateVolumeDiscount/CreateVolumeDiscountContext";
import General from "./CreateVolumeDiscount/General";
import VolumeDiscountRule from "./CreateVolumeDiscount/VolumeDiscountRule";
import Preview from "./CreateVolumeDiscount/Preview";

export default function Home() {
    return (
        <CreateVolumeDiscountProvider>
            <div className="container my-0 mx-auto">
                <Page
                    fullWidth
                    backAction={{ content: 'back', url: '#' }}
                    title="Create volume discount">
                    <Layout>
                        <Layout.Section>
                            <BlockStack gap="600">
                                <General />
                                <VolumeDiscountRule />
                            </BlockStack>

                        </Layout.Section>

                        <Layout.Section variant="oneThird">
                            <Preview />
                            <button role="button" type="submit" style={{ marginTop: "20px" , width: "100%", cursor: "pointer", backgroundColor: "green", color: "#fff", height: "35px", borderRadius: "8px", border: "none" }} className="flex items-center justify-center gap-1">
                                <span className="text-[16px]"> Save</span>
                            </button>
                        </Layout.Section>
                    </Layout>
                </Page>
            </div>
        </CreateVolumeDiscountProvider>


    )
}



