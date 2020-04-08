import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@material-ui/core";
import { Button } from "@reactioncommerce/catalyst";
import { AppBar } from "@reactioncommerce/admin-core";
import useProduct from "../hooks/useProduct";

/**
 * ProductHeader layout component
 * @returns {Node} React node
 */
function ProductToolbar() {
  const { product, onPublishProduct } = useProduct();
  const history = useHistory();
  const { t } = useTranslation();

  if (!product) {
    return null;
  }

  const currentProductHash = product.currentProductHash || null;
  const publishedProductHash = product.publishedProductHash || null;
  const isPublished = currentProductHash === publishedProductHash;

  return (
    <AppBar
      title={"Products"}
      onBackButtonClick={() => {
        history.push("/products");
      }}
    >
      <Box display="flex" alignItems="center">
        {currentProductHash !== publishedProductHash &&
          <Box paddingRight={2}>
            <Typography>{"Product has unpublished changes"}</Typography>
          </Box>
        }
        <Button
          color="primary"
          variant="contained"
          disabled={isPublished}
          onClick={onPublishProduct}
        >
          {t(isPublished ? "productDetailEdit.published" : "productDetailEdit.publish")}
        </Button>
      </Box>
    </AppBar>
  );
}

export default ProductToolbar;
