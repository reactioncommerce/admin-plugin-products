import React from "react";
import CubeIcon from "mdi-material-ui/Cube";
import ProductsTable from "./components/ProductsTable";
import ProductDetail from "./layouts/ProductDetail";
import ProductHeader from "./blocks/ProductHeader";
import ProductDetailForm from "./blocks/ProductDetailForm";
import ProductMetadataForm from "./blocks/ProductMetadataForm";
import ProductSocialForm from "./blocks/ProductSocialForm";
import ProductTagForm from "./blocks/ProductTagForm";
import ProductMediaForm from "./blocks/ProductMediaForm";
import VariantHeader from "./blocks/VariantHeader";
import VariantList from "./blocks/VariantList";
import VariantDetailForm from "./blocks/VariantDetailForm";
import VariantPricesForm from "./blocks/VariantPricesForm";
// import VariantTaxForm from "./blocks/VariantTaxForm";
import VariantMediaForm from "./blocks/VariantMediaForm";



export default function plugin({ registerRoute, registerBlock }) {

  registerRoute({
    LayoutComponent: null,
    MainComponent: ProductDetail,
    path: "/products/:handle/:variantId?/:optionId?"
  });

  registerRoute({
    group: "navigation",
    priority: 20,
    layoutComponentProps: {
      size: "wide"
    },
    path: "/products",
    MainComponent: ProductsTable,
    IconComponent: CubeIcon,
    navigationItemLabel: "admin.products"
  });


  // Register blocks

  // ProductDetail Block: Sidebar
  registerBlock({
    region: "ProductDetailSidebar",
    name: "VariantList",
    Component: VariantList,
    priority: 10
  });

  // ProductDetail Block: Header
  registerBlock({
    region: "ProductDetailHeader",
    name: "ProductHeader",
    // eslint-disable-next-line react/display-name
    Component: (props) => <ProductHeader shouldDisplayStatus={true} {...props} />,
    priority: 10
  });

  // ProductDetail Block Region: Main
  registerBlock({
    region: "ProductDetailMain",
    name: "ProductHeader",
    Component: ProductHeader,
    priority: 10
  });

  registerBlock({
    region: "ProductDetailMain",
    name: "ProductDetailForm",
    Component: ProductDetailForm,
    priority: 20
  });

  // Media gallery card and form
  registerBlock({
    region: "ProductDetailMain",
    name: "ProductMediaForm",
    Component: ProductMediaForm,
    priority: 30
  });

  registerBlock({
    region: "ProductDetailMain",
    name: "ProductSocialForm",
    Component: ProductSocialForm,
    priority: 40
  });

  registerBlock({
    region: "ProductDetailMain",
    name: "ProductTagForm",
    Component: ProductTagForm,
    priority: 50
  });

  registerBlock({
    region: "ProductDetailMain",
    name: "ProductMetadataForm",
    Component: ProductMetadataForm,
    priority: 60
  });

  registerBlock({
    region: "VariantDetailSidebar",
    name: "VariantList",
    Component: VariantList,
    priority: 70
  });

  // VariantDetail: Sidebar Region
  registerBlock({
    region: "VariantDetailHeader",
    name: "ProductHeader",
    Component: ProductHeader,
    priority: 10
  });

  // VariantDetail: Main Region
  registerBlock({
    region: "VariantDetailMain",
    name: "VariantHeader",
    Component: VariantHeader,
    priority: 10
  });

  registerBlock({
    region: "VariantDetailMain",
    name: "VariantDetailForm",
    Component: VariantDetailForm,
    priority: 20
  });

  registerBlock({
    region: "VariantDetailMain",
    name: "VariantPricesForm",
    Component: VariantPricesForm,
    priority: 30
  });

  registerBlock({
    region: "VariantDetailMain",
    name: "VariantMediaForm",
    Component: VariantMediaForm,
    priority: 40
  });

  // Move to tax plugin, or something
  // registerBlock({
  //   region: "VariantDetailMain",
  //   name: "VariantTaxForm",
  //   component: VariantTaxForm,
  //   priority: 50
  // });

}