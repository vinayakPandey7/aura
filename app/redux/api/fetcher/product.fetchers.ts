import { createAsyncThunk } from "@reduxjs/toolkit";
import { Client } from "../client";

// import { HeaderEnum } from "@modules/practice-engine/ts/enums/api";

const productList = "products/product-list";
const productDetail = (productId: string) =>
  `products/product-detail/${productId}`;

// export const postFeedback = createAsyncThunk(
//   "post-feedback",
//   async ({ organizationId, ...data }: IPostFeedbackProps) => {
//     let orgId = organizationId || process.env.NEXT_PUBLIC_PP_ORG_ID;

//     return Client.post(feedbackURL, data, {
//       headers: { [HeaderEnum.ClientId]: orgId },
//     });
//   }
// );

export const getProductList = createAsyncThunk("get-product-list", async () => {
  const response = await Client.get(productList);
  return <any>response?.data?.data;
});

export const getProductDetail = createAsyncThunk(
  "get-product-detail",
  async ({ productId }: { productId: string }) => {
    const response = await Client.get(productDetail(productId));

    return <any>response?.data?.data;
  }
);
