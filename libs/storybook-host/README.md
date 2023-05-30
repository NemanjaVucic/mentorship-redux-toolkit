## Only purpose of this package is to provide a host for others `storybook-host-*` where you need to link all in one place because Nx can't wire up .storybook/main.js between libs, so we need to do it manually:

<br/>

### <b>Link 2 parts<b> 🔗:

1. <b> `config.stories` from `.storybook/main.js`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host/.storybook/main.js) <b>

2. <b> `implicitDependencies` from `project.json`. [Example](https://github.com/nrwl/nx-recipes/blob/main/storybook-publishing-strategies-single-framework/libs/storybook-host/project.json#L6)<b>

---

**Note**: `implicitDependencies` is not required, but it's good to have it because it will show you in `nx dep-graph` which libs are connected to `storybook-host` and you can see all libs in one place.

---

❗❗❗ To be clear: here we should list everything from `config.stories` and `implicitDependencies` from `project.json` from all `storybook-host-*` libs.
