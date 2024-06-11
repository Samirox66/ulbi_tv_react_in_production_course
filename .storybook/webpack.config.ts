import webpack from "webpack";
import { buildCssLoaders } from "../config/build/loaders/buildCssLoaders";

export default ({ config }: { config: webpack.Configuration }) => {
    config.module?.rules?.push(buildCssLoaders(true));

    return config;
};
