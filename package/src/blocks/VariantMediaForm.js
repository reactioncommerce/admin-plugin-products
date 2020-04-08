import React from "react";
import { useTranslation } from "react-i18next";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
// import ProductMediaGallery from "../components/ProductMediaGallery";
import useProduct from "../hooks/useProduct";

/**
 * Variant media form block component
 * @returns {Node} React component
 */
function VariantMediaForm() {
  const { t } = useTranslation();
  const {
    currentVariant,
    product,
    shopId
  } = useProduct();

  if (!currentVariant) {
    return null;
  }

  const { _id: variantId, media } = currentVariant;

  return (
    <Card>
      <CardHeader title={t("admin.productAdmin.mediaGallery")} />
      <CardContent>
        {/* <ProductMediaGallery
          editable={true}
          media={media}
          productId={product._id}
          variantId={variantId}
          shopId={shopId}
        /> */}
      </CardContent>
    </Card>
  );
}

export default VariantMediaForm;
