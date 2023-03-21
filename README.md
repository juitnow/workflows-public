# Juit Workflows

This repository contains all shared workflows for Juit's open/public work.

The _runnable_ workflows are in [`./.github/workflows`](./.github/workflows/)
and are generated from the templates found in [`./workflows`](./workflows/)
running the `npm run build` script.

This script simply runs across all the workflow templates, expanding YAML
references and `!include` custom tags, then writing the resulting output in
the above-mentioned directory.

You can find _final_ workflows (to copy and paste in other repositories) in
the [`samples`](./samples/) directory.
