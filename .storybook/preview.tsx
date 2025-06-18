import { withRouter } from "storybook-addon-remix-react-router";
import { Provider } from "react-redux";

import { initialize, mswLoader } from "msw-storybook-addon";

import store from "../src/app/providers/store";
import type { Preview } from "@storybook/react-vite";

import "../src/shared/main.css";
import "../src/shared/designSystem.css";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
    withRouter,
  ],
  loaders: [mswLoader],
};

export default preview;
