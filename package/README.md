# Reaction Products Admin Plugin

## Usage

### Install Dependencies

1. `npx i @reactioncommerce/admin-plugin-products`
1. `npx install-peerdeps --only-peers @reactioncommerce/admin-plugin-products`

### Register plugin

Import and register the products plugin at the root of your application. Typically this will be your `src/index.js`.

```js
import { App, Reaction, registerPlugin } from "@reactioncommerce/admin-core";
import Products from "@reactioncommerce/admin-plugin-products";
import config from "./config";

// Register plugins
registerPlugin(Products);

// Configure and "start" the Reaction webapp
Reaction({
  AppComponent: App,
  config
});
```

## License

Copyright 2020 Reaction Commerce

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
