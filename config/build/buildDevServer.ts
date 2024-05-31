import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguation } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfiguation {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    };
}
